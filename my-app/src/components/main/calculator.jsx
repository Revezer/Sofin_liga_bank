import React, {useRef, useState} from 'react'
import {connect} from 'react-redux'
import {setInformation} from '../../store/action'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'

const maternalCapital = 470000

const MIN_SUM = 1200000
const MAX_SUM = 25000000
const CHANGE_NUMBER = 100000
const HUNDRED = 100
const MAX_YEAR = 30
const MIN_YEAR = 5
const ZERO_NUMBER = 0
const TEN_NUMBER = 10
const THOUSAND_NUMBER = 1000
const MAX_PROCENT = 9.40
const MIN_PROCENT = 8.50
const PROCENT_AVTO_TWO_ITEM = 3.50
const PROCENT_AVTO_ONE_ITEM = 8.50
const MIN_PROCENT_AVTO = 15
const MAX_PROCENT_AVTO = 16
const PROCENT_FIRST_DEPOSIT = 15
const NUMBER_OF_MONTHS = 12
const ONE = 1
const REQUIRED_INCOME = 45

const orderingData = {
    propertyValue: 2,
    anInitialFee: 2
}

const Calculator = (props) => {
    const {information, setInformation} = props

    const nameRef = useRef()
    const mailRef = useRef()
    const telephoneRef = useRef()

    const [buttonWork, setButtonWork] = useState(false)
    const [errorValue, setErrorValue] = useState(false)
    const [errorContribution, setErrorContribution] = useState(false)

    const onInputValue = (event) => {
        setInformation({
            ...information,
            goal: event.target.textContent,
            secondStep: true,
            openinput: false
        })
    }

    const onChangePrice = (event) => {
        setInformation({
            ...information,
            propertyValue: Number(event.target.value.replace(/\s/g, '')),
            anInitialFee: Math.trunc(Number(event.target.value.replace(/\s/g, '')) * (information.contribution / HUNDRED))

        })
        setButtonWork(true)
        setErrorValue(true)
        if (Number(event.target.value.replace(/\s/g, '')) > minValue) {
            if (Number(event.target.value.replace(/\s/g, '')) < maxValue) {
                setButtonWork(false)
                setErrorValue(false)
            }
        }
    }

    const onButtonDecrease = () => {
        setButtonWork(false)
        setErrorValue(false)
        setInformation({
            ...information,
            propertyValue: information.propertyValue - CHANGE_NUMBER
        })
        if (information.propertyValue <= MIN_SUM) {
            return setInformation({
                ...information,
                propertyValue: MIN_SUM
            })
        }       
    }

    const onButtonZoom = () => {
        setButtonWork(false)
        setErrorValue(false)
        setInformation({
            ...information,
            propertyValue: information.propertyValue + CHANGE_NUMBER
        })
        if (information.propertyValue >= MAX_SUM) {
            return setInformation({
                ...information,
                propertyValue: MAX_SUM
            })
        }
    }

    const onChangePercent = (event) => {
        setInformation({
            ...information,
            contribution: event.target.value,
            anInitialFee: Math.trunc(information.propertyValue * (event.target.value / HUNDRED))
        })
    }

    const changeInContribution = (event) => {
        setInformation({
            ...information,
            contribution: (event.target.value.replace(/\s/g, '') / information.propertyValue) * HUNDRED,
            anInitialFee: event.target.value.replace(/\s/g, '')
        })
        setButtonWork(true)
        setErrorContribution(true)
        if (Number(event.target.value.replace(/\s/g, '')) > minContributionValue) {
            if (Number(event.target.value.replace(/\s/g, '')) < information.propertyValue) {
                setButtonWork(false)
                setErrorContribution(false)
            }
        }
    }

    const onChangeYear = (event) => {
        setInformation({
            ...information,
            year: event.target.value
        })
    }

    const onChangeCapital = (event) => {
        setInformation({
            ...information,
            capital: event.target.checked
        })
    }

    const onChangeKasko = (event) => {
        setInformation({
            ...information,
            kasko: event.target.checked
        })
    }

    const onChangeInsurance = (event) => {
        setInformation({
            ...information,
            insurance: event.target.checked
        })
    }

    
    const onChangeOfYear = (event) => {
        setInformation({
            ...information,
            year: parseInt(event.target.value.match(/\d+/))
        })
        if (parseInt(event.target.value.match(/\d+/)) > MAX_YEAR) {
            return setInformation({
                ...information,
                year: MAX_YEAR
            })
        }
        if (parseInt(event.target.value.match(/\d+/)) < MIN_YEAR) {
            return setInformation({
                ...information,
                year: MIN_YEAR
            })
        }
    }
    
    const getMortgageAmount = () => information.capital ? information.propertyValue - information.anInitialFee - maternalCapital : information.propertyValue - information.anInitialFee

    const setTransformationNumber = (number) => {
        if(number > ZERO_NUMBER && number < TEN_NUMBER)
            return "000" + number;
        else if(number >= TEN_NUMBER && number < HUNDRED)
            return "00" + number;
        else if(number >= HUNDRED && number < THOUSAND_NUMBER)
            return "0" + number;
    }

    const interestRate = information.contribution < PROCENT_FIRST_DEPOSIT ? MAX_PROCENT : MIN_PROCENT
    const interestRateAvto = () => {
        if (information.kasko && information.insurance) {
            return PROCENT_AVTO_TWO_ITEM
        } else
        if (information.kasko || information.insurance) {
            return PROCENT_AVTO_ONE_ITEM
        } else 
        if (information.propertyValue > 2000000) {
            return MIN_PROCENT_AVTO
        } else {
            return MAX_PROCENT_AVTO
        }
    }

    const typeLoan = orderingData.goal === 'Ипотечное кредитование' ? 'Ипотека' : 'Автокредит'
    const procentAnte = information.goal === 'Ипотечное кредитование' ? interestRate : interestRateAvto()

    const formula = Math.ceil((getMortgageAmount() * (procentAnte / HUNDRED / NUMBER_OF_MONTHS)) / (ONE - (ONE / Math.pow(ONE + (procentAnte / HUNDRED / NUMBER_OF_MONTHS), information.year * NUMBER_OF_MONTHS))))

    const income = Math.ceil(formula * HUNDRED / REQUIRED_INCOME)

    const checkCapital = information.capital ? 'calculator__textcapital calculator__textcapital--active' : 'calculator__textcapital'
    const checkKasko = information.kasko ? 'calculator__textcapital calculator__textcapital--active' : 'calculator__textcapital'
    const checkInsurance = information.insurance ? 'calculator__textcapital calculator__textcapital--active' : 'calculator__textcapital'

    const onOrdering = (evt) => {
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
        }
        const form = document.getElementById('form')
        form.classList.remove('calculator__form-disabled')
        form.scrollIntoView()
    }

    const noEffect = () => {
    }

    const onErrorForm = () => {
        if (!telephoneRef.current.value || !mailRef.current.value.value || !nameRef.current.value) {
            let docForm = document.getElementById('form')
            docForm.classList.remove('calculator__error');
            docForm.classList.add('calculator__error');
        } 
    }

    const onFormSubmitting = (event) => {
        event.preventDefault()
        document.body.classList.add('openPopUp')
        setInformation({
            ...information,
            applicationNumber: information.applicationNumber + ONE,
            ordering: false,
            gratitude: true
        })
    }

    const onPopUpClose = () => {
        document.body.classList.remove('openPopUp')
        setInformation({
            ...information,
            gratitude: false
        })
    }

    const onInputOpen = () => {
        setInformation({
            ...information,
            openinput: true
        })
    }

    const getElementTargetTaking = () => {
        if(information.openinput) {
            return(
                <>
                    <div className='calculator__option-credit' value='Ипотечное кредитование' onClick={onInputValue}>
                        <span className='calculator__option-text' value='Ипотечное кредитование'>Ипотечное кредитование</span>
                    </div>
                    <div className='calculator__option-avto' value='Автомобильное кредитование' onClick={onInputValue}>
                        <span className='calculator__option-text' value='Автомобильное кредитование'>Автомобильное кредитование</span>
                    </div>
                </>
            )
        }
    }

    const getOpenInput = information.openinput ? 'calculator__select calculator__select--open' : 'calculator__select'

    const getElementGratitudePopUp = () => {
        if(information.gratitude) {
            return(
                <div className='calculator__popup'>
                    <span className='popup__text'>Спасибо за обращение в наш банк.</span>
                    <span className='popup__notification'>Наш менеджер скоро свяжется с вами по указанному номеру телефона</span>
                    <button className='popup__button' onClick={onPopUpClose}></button>
                </div>
            )
        }
    }

    const getElementClearanceStep = () => {
        return(
            <form className='calculator__form form calculator__form-disabled' id='form' onSubmit={onFormSubmitting}>
                <span className='form__text form__text--center'>Шаг 3. Оформление заявки</span>
                <div className='form__conteiner'>
                    <span className='form__text form__text--margin'>{'№  ' + setTransformationNumber(orderingData.applicationNumber)}</span>
                    <span className='form__description'>Номер заявки</span>
                </div>
                <div className='form__conteiner'>
                    <span className='form__text'>{typeLoan}</span>
                    <span className='form__description'>Цель кредита</span>
                </div>
                <div  className='form__conteiner'>
                    <span className='form__text'>{numberWithSpaces(orderingData.propertyValue) + ' рублей'}</span>
                    <span className='form__description'>{textЕargetСost}</span>
                </div>
                <div  className='form__conteiner'>
                    <span className='form__text'>{numberWithSpaces(orderingData.anInitialFee) + ' рублей'}</span>
                    <span className='form__description'>Первоначальный взнос</span>
                </div>
                <div  className='form__conteiner'>
                    <span className='form__text'>{textAge(orderingData.year)}</span>
                    <span className='form__description'>Срок кредитования</span>
                </div>
                <input className='form__input form__input--margin' ref={nameRef} required placeholder='ФИО' type='text'></input>
                <div className='form__conteiner-inpute'>
                    <InputMask mask="+7(999) 999 99 99" maskChar=" " className='form__input' ref={mailRef} required placeholder='Телефон' />
                    <input className='form__input form__inpute--right' ref={telephoneRef} required placeholder='E-mail' type='email'></input>
                </div>
                <button className='form__button' type='submit' onClick={onErrorForm}>Отправить</button>
            </form>
        )
    }

    const numberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const swichOrdering = buttonWork ? noEffect : onOrdering
    const incorrectValue = errorValue ? 'Некорректное значение' : numberWithSpaces(getMortgageAmount()) + ' рублей'

    const getElementOfferSwich = () => getMortgageAmount() < minCredit ? 
        <div className='calculator__inaccessibility inaccessibility'>
            <span className='inaccessibility__text'>Наш банк не выдаёт ипотечные кредиты меньше {minCredit} рублей.</span>
            <span className='inaccessibility__description'>Попробуйте использовать другие параметры для расчёта.</span>
        </div> : 
        <>
            <div className='calculator__offer offer'>
                <span className='offer__text offer__text--first'>Наше предложение</span>
                <div className='offer__block'>
                    <div className='offer__conteiner'>
                        <span className='offer__text offer__text--margin'>{incorrectValue}</span>
                        <span className='offer__description'>{textCredit}</span>
                    </div>
                    <div className='offer__conteiner offer__conteiner--tabletmargin'>
                        <span className='offer__text'>{procentAnte + '%'}</span>
                        <span className='offer__description'>Процентная ставка</span>
                    </div>
                    <div className='offer__conteiner offer__conteiner--tablet'>
                        <span className='offer__text'>{numberWithSpaces(formula) + ' рублей'}</span>
                        <span className='offer__description'>Ежемесячный платеж</span>
                    </div>
                    <div className='offer__conteiner offer__conteiner--tablet offer__conteiner--tabletmargin'>
                        <span className='offer__text'>{numberWithSpaces(income) + ' рублей'}</span>
                        <span className='offer__description'>Необходимый доход</span>
                    </div>
                </div>
                <button className='offer__button' onClick={swichOrdering}>Оформить заявку</button>
            </div>
        </>

    const getElementOfferStep = () => information.secondStep ? getElementOfferSwich() : ''

    const minValue = information.goal === 'Ипотечное кредитование' ? '1200000' : '500000'
    const maxValue = information.goal === 'Ипотечное кредитование' ? '25000000' : '5000000'
    const goalСredit = information.goal === 'Ипотечное кредитование' ? 'Стоимость недвижимости' : 'Стоимость автомобиля'
    const minContributionCredit = information.propertyValue * 0.10
    const minContributionAvto = information.propertyValue * 0.20
    const minContributionValue = information.goal === 'Ипотечное кредитование' ? minContributionCredit : minContributionAvto
    const minSlider = information.goal === 'Ипотечное кредитование' ? 10 : 20
    const minCredit = information.goal === 'Ипотечное кредитование' ? 500000 : 200000
    const textCredit = information.goal === 'Ипотечное кредитование' ? 'Сумма ипотеки' : 'Сумма автокредита'
    const textЕargetСost = information.goal === 'Ипотечное кредитование' ? 'Стоимость недвижимости' : 'Стоимость автомобиля'
    const errorValueText = errorValue ? 'inputValue__text' : 'inputValue__text inputValue__text--disabled'

    const getElementCheckBox = () => information.goal === 'Ипотечное кредитование' ? 
        <label className='calculator__conteinercapital'>
            <input className='calculator__inputcapital' type="checkbox" onChange={onChangeCapital}/>
            <span className={checkCapital}>Использовать материнский капитал</span>
        </label> :
        <>
            <label className='calculator__conteinercapital'>
                <input className='calculator__inputcapital' type="checkbox" onChange={onChangeKasko}/>
                <span className={checkKasko}>Оформить КАСКО в нашем банке</span>
            </label>
            <label className='calculator__conteinercapital'>
                <input className='calculator__inputcapital' type="checkbox" onChange={onChangeInsurance}/>
                <span className={checkInsurance}>Оформить Страхование жизни в нашем банке</span>
            </label>
        </>

    const inputValueClass = errorValue ? 'inputValue__input input__error' : 'inputValue__input'
    const onputContributionClass = errorContribution ? 'calculator__contribution input__error' : 'calculator__contribution'

    const textAge = (age) => {
        let text;
        let count = age % 100;
        if (count >= 5 && count <= 20) {
            text = 'лет';
        } else {
            count = count % 10;
            if (count === 1) {
                text = 'год';
            } else if (count >= 2 && count <= 4) {
                text = 'года';
            } else {
                text = 'лет';
            }
        }
        return age + ' ' + text;
    }
    

    const getElementNextStep = () => {
        if(information.secondStep) {
            return(
                <>
                    <span className='calculator__text calculator__text--margin'>Шаг 2. Введите параметры кредита</span>
                    <div className='calculator__inputValue inputValue'>
                        <button className='inputValue__button inputValue__button--left' onClick={onButtonDecrease}></button>
                        <label className='calculator__clarification'>{goalСredit}
                            <div className={inputValueClass} id='value'>
                                <span className={errorValueText}>Некорректное значение</span>
                                <input className='inputValue__value' value={numberWithSpaces(information.propertyValue)} min={minValue} max={maxValue} onChange={onChangePrice}/>
                                <span>рублей</span>
                            </div>
                        </label>
                        <button className='inputValue__button inputValue__button--right' onClick={onButtonZoom}></button>
                    </div>
                    <span className='calculator__options'>От {minValue}  до {maxValue} рублей</span>
                    <label className='calculator__clarification calculator__clarification--margin'>Первоначальный взнос
                        <div className={onputContributionClass} id='contribution'>
                            <input className='calculator__contribution-value' value={numberWithSpaces(information.anInitialFee)} min={minContributionValue} max={information.propertyValue} onChange={changeInContribution} />
                            <span>рублей</span>
                        </div>
                    </label>
                    <input className='calculator__slider' type="range" min={minSlider} max='100' step="5" value={information.contribution} onChange={onChangePercent} />
                    <span className='calculator__textcontribution'>{information.contribution + '%'}</span>
                    <label className='calculator__textterm'>Срок кредитования
                        <input className='calculator__year' value={textAge(information.year)} onChange={onChangeOfYear} />
                    </label>
                    <input className='calculator__slider calculator__slider--margin' type="range" min="5" max="30" step="1" value={information.year} onChange={onChangeYear} />
                    <div className='calculator__textconteiner'>
                        <span className='calculator__textyear'>5 лет</span>
                        <span className='calculator__textyear'>30 лет</span>
                    </div>
                    {getElementCheckBox()}
                </>
            )
        }
    }

    return(
        <div className='calculator' id='calculator'>
            <h3 className='calculator__title'>Кредитный калькулятор</h3>
            <div className='calculator__conteiner'>
                <div className='calculator__box'>
                    <span className='calculator__text'>Шаг 1. Цель кредита</span>
                    <div className={getOpenInput} onClick={onInputOpen}>
                        <span className='calculator__select-text'>{information.goal}</span>
                    </div>
                    {getElementTargetTaking()}
                    {getElementNextStep()}
                </div>
                {getElementOfferStep()}
            </div>
            {getElementClearanceStep()}
            {getElementGratitudePopUp()}
        </div>
    )
}

Calculator.propTypes = {
    information : PropTypes.shape({
        goal: PropTypes.string.isRequired,
        secondStep: PropTypes.bool.isRequired,
        propertyValue: PropTypes.number.isRequired,
        contribution: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired,
        capital: PropTypes.bool.isRequired,
        anInitialFee: PropTypes.number.isRequired,
        ordering: PropTypes.bool.isRequired,
        applicationNumber: PropTypes.number.isRequired,
        gratitude: PropTypes.bool.isRequired,
        openinput: PropTypes.bool.isRequired
    }).isRequired,
    setInformation : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    information: state.information
})

const mapDispatchToProps = (dispatch) => ({
    setInformation(info) {
        dispatch(setInformation(info))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
