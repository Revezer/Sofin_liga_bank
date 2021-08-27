import React, {useState, useRef} from 'react'

const maternalCapital = 470000

const orderingData = {}

const Calculator = () => {

    const [information, setInformation] = useState({
        goal: 'Выберите цель кредита',
        secondStep: false,
        propertyValue: 2000000,
        contribution: 10,
        year: 5,
        capital: false,
        anInitialFee: 200000,
        ordering: false,
        applicationNumber: 1,
        gratitude: false,
        openinput: false
    })

    const nameRef = useRef()
    const mailRef = useRef()
    const telephoneRef = useRef()

    const handleChange = (event) => {
        setInformation({
            ...information,
            goal: event.target.textContent,
            secondStep: true,
            openinput: false
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

    const transformationNumber = (number) => {
        if(number > 0 && number < 10)
             return "000" + number;
        else if(number >= 10 && number < 100)
             return "00" + number;
        else if(number >= 100 && number < 1000)
             return "0" + number;
     }

    const typeLoan = orderingData.goal === 'Ипотечное кредитование' ? 'Ипотека' : 'Автокредит'

    const interestRate = information.contribution < 15 ? 9.40 : 8.50

    const formula = Math.ceil((mortgageAmount() * (interestRate / 100 /12)) / (1 - (1 / Math.pow(1 + (interestRate / 100 /12), information.year * 12))))

    const income = Math.ceil(formula * 100 / 45)

    const checkCapital = information.capital === true ? 'calculator__textcapital calculator__textcapital--active' : 'calculator__textcapital'

    const handleOrdering = (evt) => {
        evt.preventDefault()
        setInformation({
            ...information,
            ordering: true
        })
        Object.assign(orderingData, information)
        window.onkeydown = (evt) => {
            if ( evt.keyCode === 27 ) {
                setInformation({
                    ...information,
                    ordering: false
                })
            }
        };
    }

    const submittingForm = (event) => {
        event.preventDefault()
        setInformation({
            ...information,
            applicationNumber: information.applicationNumber + 1,
            ordering: false,
            gratitude: true
        })
    }

    const closePopUp = () => {
        setInformation({
            ...information,
            gratitude: false
        })
    }

    const handleOpenInput = () => {
        setInformation({
            ...information,
            openinput: true
        })
    }

    const targetTaking = () => {
        if(information.openinput === true) {
            return(
                <>
                    <div className='calculator__option-credit' value='Ипотечное кредитование' onClick={handleChange}>
                        <span className='calculator__option-text' value='Ипотечное кредитование'>Ипотечное кредитование</span>
                    </div>
                    <div className='calculator__option-avto' value='Автомобильное кредитование' onClick={handleChange}>
                        <span className='calculator__option-text' value='Автомобильное кредитование'>Автомобильное кредитование</span>
                    </div>
                </>
            )
        }
    }

    const openInput = information.openinput === true ? 'calculator__select calculator__select--open' : 'calculator__select'

    const gratitudePopUp = () => {
        if(information.gratitude === true) {
            return(
                <div className='calculator__popup'>
                    <span className='popup__text'>Спасибо за обращение в наш банк.</span>
                    <span className='popup__notification'>Наш менеджер скоро свяжется с вами по указанному номеру телефона</span>
                    <button className='popup__button' onClick={closePopUp}></button>
                </div>
            )
        }
    }

    const clearanceStep = () => {
        if(information.ordering === true) {
            return(
                <form className='calculator__form form' onSubmit={submittingForm}>
                    <span className='form__text form__text--center'>Шаг 3. Оформление заявки</span>
                    <div className='form__conteiner'>
                        <span className='form__text form__text--margin'>{'№  ' + transformationNumber(orderingData.applicationNumber)}</span>
                        <span className='form__description'>Номер заявки</span>
                    </div>
                    <div className='form__conteiner'>
                        <span className='form__text'>{typeLoan}</span>
                        <span className='form__description'>Цель кредита</span>
                    </div>
                    <div  className='form__conteiner'>
                        <span className='form__text'>{orderingData.propertyValue + ' рублей'}</span>
                        <span className='form__description'>Стоимость недвижимости</span>
                    </div>
                    <div  className='form__conteiner'>
                        <span className='form__text'>{orderingData.anInitialFee + ' рублей'}</span>
                        <span className='form__description'>Первоначальный взнос</span>
                    </div>
                    <div  className='form__conteiner'>
                        <span className='form__text'>{orderingData.year + ' лет'}</span>
                        <span className='form__description'>Срок кредитования</span>
                    </div>
                    <input className='form__input form__input--margin' ref={nameRef} required placeholder='ФИО' type='text'></input>
                    <div className='form__conteiner-inpute'>
                        <input className='form__input' ref={mailRef} required placeholder='Телефон' type='tel'></input>
                        <input className='form__input form__inpute--right' ref={telephoneRef} required placeholder='E-mail' type='email'></input>
                    </div>
                    <button className='form__button' type='submit'>Отправить</button>
                </form>
            )
        }
    }

    const offerStep = () => {
        if(information.secondStep === true) {
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
                            <div className='offer__block'>
                                <div className='offer__conteiner'>
                                    <span className='offer__text offer__text--margin'>{mortgageAmount() + ' рублей'}</span>
                                    <span className='offer__description'>Сумма ипотеки</span>
                                </div>
                                <div className='offer__conteiner offer__conteiner--tabletmargin'>
                                    <span className='offer__text'>{interestRate + '%'}</span>
                                    <span className='offer__description'>Процентная ставка</span>
                                </div>
                                <div className='offer__conteiner offer__conteiner--tablet'>
                                    <span className='offer__text'>{formula + ' рублей'}</span>
                                    <span className='offer__description'>Ежемесячный платеж</span>
                                </div>
                                <div className='offer__conteiner offer__conteiner--tablet offer__conteiner--tabletmargin'>
                                    <span className='offer__text'>{income + ' рублей'}</span>
                                    <span className='offer__description'>Необходимый доход</span>
                                </div>
                            </div>
                            <button className='offer__button' type='submit'>Оформить заявку</button>
                        </div>
                    </>
                )
            }
        }
    }

    const nextStep = () => {
        if(information.secondStep === true) {
            return(
                <>
                    <span className='calculator__text calculator__text--margin'>Шаг 2. Введите параметры кредита</span>
                    <div className='calculator__inputValue inputValue'>
                        <button className='inputValue__button inputValue__button--left' onClick={decreaseButton}></button>
                        <label className='calculator__clarification'>Стоимость недвижимости
                        <input className='inputValue__input' value={information.propertyValue  + ' рублей'} onChange={handleChangePrice}></input>
                        </label>
                        <button className='inputValue__button inputValue__button--right' onClick={zoomButton}></button>
                    </div>
                    <span className='calculator__options'>От 1 200 000  до 25 000 000 рублей</span>
                    <label className='calculator__clarification calculator__clarification--margin'>Первоначальный взнос
                        <input className='calculator__contribution' value={information.anInitialFee + ' рублей'} onChange={changeInContribution} />
                    </label>
                    <input className='calculator__slider' type="range" min="10" max="100" step="5" value={information.contribution} onChange={handleChangePercent} />
                    <span className='calculator__textcontribution'>{information.contribution + '%'}</span>
                    <label className='calculator__textterm'>Срок кредитования
                        <input className='calculator__year' value={information.year + ' лет'} onChange={handleChangeOfYear} />
                    </label>
                    <input className='calculator__slider calculator__slider--margin' type="range" min="5" max="30" step="1" value={information.year} onChange={handleChangeYear} />
                    <div className='calculator__textconteiner'>
                        <span className='calculator__textyear'>5 лет</span>
                        <span className='calculator__textyear'>30 лет</span>
                    </div>
                    <label className='calculator__conteinercapital'>
                        <input className='calculator__inputcapital' type="checkbox" onChange={handleChangeCapital}/>
                        <span className={checkCapital}>Использовать материнский капитал</span>
                    </label>
                </>
            )
        }
    }

    return(
        <form className='calculator' onSubmit={handleOrdering}>
            <h3 className='calculator__title'>Кредитный калькулятор</h3>
            <div className='calculator__conteiner'>
                <div className='calculator__box'>
                    <span className='calculator__text'>Шаг 1. Цель кредита</span>
                    <div className={openInput} onClick={handleOpenInput}>
                        <span className='calculator__select-text'>{information.goal}</span>
                    </div>
                    {targetTaking()}
                    {nextStep()}
                </div>
                {offerStep()}
            </div>
            {clearanceStep()}
            {gratitudePopUp()}
        </form>
    )
}

export default Calculator;
