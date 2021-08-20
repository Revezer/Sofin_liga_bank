import React, {useState} from 'react'

const maternalCapital = 470000

const orderingData = {}

const Calculator = () => {

    // const [goal, setGoal] = useState('Выберите цель кредита');
    // const [secondStep, setSecondStep] = useState(false);
    // const [propertyValue, setPropertyValue] = useState(2000000)
    // const [contribution, setContribution] = useState(10)
    // const [year, setYear] = useState(5)
    // const [capital, setCapital] = useState(false)
    // const [anInitialFee, setAnInitialFee] = useState(200000)

    // const [goo, setgoo] = useState(2)

    const [information, setInformation] = useState({
        goal: 'Выберите цель кредита',
        secondStep: false,
        propertyValue: 2000000,
        contribution: 10,
        year: 5,
        capital: false,
        anInitialFee: 200000,
        ordering: false
    })

    const handleChange = (event) => {
        setInformation({
            ...information,
            goal: event.target.value
        })
        setInformation({
            ...information,
            secondStep: true
        })
    }

    const handleChangePrice = (event) => {
        setInformation({
            ...information,
            propertyValue: parseInt(event.target.value.match(/\d+/))
        })
        if (parseInt(event.target.value.match(/\d+/)) < 1200000) {
            return setInformation({
                ...information,
                propetyValue: 1200000
            })
        }
        if (parseInt(event.target.value.match(/\d+/)) > 25000000) {
            return setInformation({
                ...information,
                propetyValue: 25000000
            })
        }
    }

    const decreaseButton = () => {
        setInformation({
            ...information,
            propertyValue: information.propertyValue - 100000
        })
        if (information.propertyValue <= 1200000) {
            return setInformation({
                ...information,
                propertyValue: 1200000
            })
        }
    }

    const zoomButton = () => {
        setInformation({
            ...information,
            propertyValue: information.propertyValue + 100000
        })
        if (information.propertyValue >= 25000000) {
            return setInformation({
                ...information,
                propertyValue: 25000000
            })
        }
    }

    const handleChangePercent = (event) => {
        setInformation({
            ...information,
            contribution: event.target.value,
            anInitialFee: information.propertyValue * (event.target.value / 100)
        })
    }

    const changeInContribution = (event) => {
        setInformation({
            ...information,
            contribution: (parseInt(event.target.value.match(/\d+/)) / information.propertyValue) * 100,
            anInitialFee: parseInt(event.target.value.match(/\d+/))
        })
    }

    const handleChangeYear = (event) => {
        setInformation({
            ...information,
            year: event.target.value
        })
    }

    const handleChangeCapital = (event) => {
        setInformation({
            ...information,
            capital: event.target.checked
        })
    }
    
    const handleChangeOfYear = (event) => {
        setInformation({
            ...information,
            year: parseInt(event.target.value.match(/\d+/))
        })
        if (parseInt(event.target.value.match(/\d+/)) > 30) {
            return setInformation({
                ...information,
                year: 30
            })
        }
        if (parseInt(event.target.value.match(/\d+/)) < 5) {
            return setInformation({
                ...information,
                year: 5
            })
        }
    }
    
    const mortgageAmount = () => {
        if(information.capital === true) {
            return information.propertyValue - information.anInitialFee - maternalCapital
        } else {
            return information.propertyValue - information.anInitialFee
        }
    }

    const interestRate = information.contribution < 15 ? 9.40 : 8.50

    const formula = Math.ceil((mortgageAmount() * (interestRate / 100 /12)) / (1 - (1 / Math.pow(1 + (interestRate / 100 /12), information.year * 12))))

    const income = Math.ceil(formula * 100 / 45)

    const checkCapital = information.capital === true ? 'calculator__textcapital calculator__textcapital--active' : 'calculator__textcapital'

    const handleOrdering = () => {
        setInformation({
            ...information,
            ordering: true
        })
        Object.assign(orderingData, information)
    }

    const clearanceStep = () => {
        if(information.ordering === true) {
            return(
                <form>
                    <span>Шаг 3. Оформление заявки</span>
                    <span>№ 0010</span>
                    <span>Номер заявки</span>
                    <span>{orderingData.goal}</span>
                    <span>Цель кредита</span>
                    <span>{orderingData.propertyValue + ' рублей'}</span>
                    <span>Стоимость недвижимости</span>
                    <span>{orderingData.anInitialFee + ' рублей'}</span>
                    <span>Первоначальный взнос</span>
                    <span>{orderingData.year + ' лет'}</span>
                    <span>Срок кредитования</span>
                    <input placeholder='ФИО' type='text'></input>
                    <input placeholder='Телефон' type='tel'></input>
                    <input placeholder='E-mail' type='email'></input>
                    <button>Отправить</button>
                </form>
            )
        }
    }

    const offerStep = () => {
        if(mortgageAmount() < 500000) {
            return(
                <div className='calculator__inaccessibility inaccessibility'>
                    <span className='inaccessibility__text'>Наш банк не выдаёт ипотечные кредиты меньше 200 000 рублей.</span>
                    <span className='inaccessibility__description'>Попробуйте использовать другие параметры для расчёта.</span>
                </div>
            )
        } else {
            return(
                <>
                    <div className='calculator__offer offer'>
                        <span className='offer__text offer__text--first'>Наше предложение</span>
                        <span className='offer__text offer__text--margin'>{mortgageAmount() + ' рублей'}</span>
                        <span className='offer__description'>Сумма ипотеки</span>
                        <span className='offer__text'>{interestRate + '%'}</span>
                        <span className='offer__description'>Процентная ставка</span>
                        <span className='offer__text'>{formula + ' рублей'}</span>
                        <span className='offer__description'>Ежемесячный платеж</span>
                        <span className='offer__text'>{income + ' рублей'}</span>
                        <span className='offer__description'>Необходимый доход</span>
                        <button className='offer__button' onClick={handleOrdering}>Оформить заявку</button>
                    </div>
                    {clearanceStep()}
                </>
            )
        }
    }

    const nextStep = () => {
        if(information.secondStep === true) {
            return(
                <>
                    <span className='calculator__text calculator__text--margin'>Шаг 2. Введите параметры кредита</span>
                    <span className='calculator__clarification'>Стоимость недвижимости</span>
                    <div className='calculator__inputValue inputValue'>
                        <button className='inputValue__button inputValue__button--left' onClick={decreaseButton}></button>
                        <input className='inputValue__input' value={information.propertyValue  + ' рублей'} onChange={handleChangePrice}></input>
                        <button className='inputValue__button inputValue__button--right' onClick={zoomButton}></button>
                    </div>
                    <span className='calculator__options'>От 1 200 000  до 25 000 000 рублей</span>
                    <span className='calculator__clarification calculator__clarification--margin'>Первоначальный взнос</span>
                    <input className='calculator__contribution' value={information.anInitialFee + ' рублей'} onChange={changeInContribution} />
                    <input className='calculator__slider' type="range" min="10" max="100" step="5" value={information.contribution} onChange={handleChangePercent} />
                    <span className='calculator__textcontribution'>{information.contribution + '%'}</span>
                    <span className='calculator__textterm'>Срок кредитования</span>
                    <input className='calculator__year' value={information.year + ' лет'} onChange={handleChangeOfYear} />
                    <input className='calculator__slider calculator__slider--margin' type="range" min="5" max="30" step="1" value={information.year} onChange={handleChangeYear} />
                    <div className='calculator__textconteiner'>
                        <span className='calculator__textyear'>5 лет</span>
                        <span className='calculator__textyear'>30 лет</span>
                    </div>
                    <label className='calculator__conteinercapital'>
                        <input className='calculator__inputcapital' type="checkbox" onChange={handleChangeCapital}/>
                        <span className={checkCapital}>Использовать материнский капитал</span>
                    </label>
                    {offerStep()}
                </>
            )
        }
    }

    return(
        <div className='calculator'>
            <h3 className='calculator__title'>Кредитный калькулятор</h3>
            <span className='calculator__text'>Шаг 1. Цель кредита</span>
            <select className='calculator__select' value={information.goal} onChange={handleChange}>
                <option className='calculator__option calculator__option--display'>Выберите цель кредита</option>
                <option value='Ипотечное кредитование' className='calculator__option'>Ипотечное кредитование</option>
                <option value='Автомобильное кредитование' className='calculator__option'>Автомобильное кредитование</option>
            </select>
            {nextStep()}
        </div>
    )
}

export default Calculator;
