import React, {useRef} from 'react'
import {connect} from 'react-redux'
import {setInformation} from '../../store/action'
import PropTypes from 'prop-types'

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
const PROCENT_FIRST_DEPOSIT = 15
const NUMBER_OF_MONTHS = 12
const ONE = 1
const REQUIRED_INCOME = 45
const MIN_CREDIT = 500000

const orderingData = {}

const Calculator = (props) => {
    const {information, setInformation} = props

    const nameRef = useRef()
    const mailRef = useRef()
    const telephoneRef = useRef()

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
            propertyValue: parseInt(event.target.value.match(/\d+/))
        })
        if (parseInt(event.target.value.match(/\d+/)) < MIN_SUM) {
            return setInformation({
                ...information,
                propetyValue: MIN_SUM
            })
        }
        if (parseInt(event.target.value.match(/\d+/)) > MAX_SUM) {
            return setInformation({
                ...information,
                propetyValue: MAX_SUM
            })
        }
    }

    const onButtonDecrease = () => {
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
            anInitialFee: information.propertyValue * (event.target.value / HUNDRED)
        })
    }

    const changeInContribution = (event) => {
        setInformation({
            ...information,
            contribution: (parseInt(event.target.value.match(/\d+/)) / information.propertyValue) * HUNDRED,
            anInitialFee: parseInt(event.target.value.match(/\d+/))
        })
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
    
    const getMortgageAmount = () => information.capital === true ? information.propertyValue - information.anInitialFee - maternalCapital : information.propertyValue - information.anInitialFee

    const setTransformationNumber = (number) => {
        if(number > ZERO_NUMBER && number < TEN_NUMBER)
             return "000" + number;
        else if(number >= TEN_NUMBER && number < HUNDRED)
             return "00" + number;
        else if(number >= HUNDRED && number < THOUSAND_NUMBER)
             return "0" + number;
     }

    const typeLoan = orderingData.goal === 'Ипотечное кредитование' ? 'Ипотека' : 'Автокредит'

    const interestRate = information.contribution < PROCENT_FIRST_DEPOSIT ? MAX_PROCENT : MIN_PROCENT

    const formula = Math.ceil((getMortgageAmount() * (interestRate / HUNDRED / NUMBER_OF_MONTHS)) / (ONE - (ONE / Math.pow(ONE + (interestRate / HUNDRED / NUMBER_OF_MONTHS), information.year * NUMBER_OF_MONTHS))))

    const income = Math.ceil(formula * HUNDRED / REQUIRED_INCOME)

    const checkCapital = information.capital === true ? 'calculator__textcapital calculator__textcapital--active' : 'calculator__textcapital'

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
        };
    }

    const onFormSubmitting = (event) => {
        event.preventDefault()
        setInformation({
            ...information,
            applicationNumber: information.applicationNumber + ONE,
            ordering: false,
            gratitude: true
        })
    }

    const onPopUpClose = () => {
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

    const getOpenInput = information.openinput === true ? 'calculator__select calculator__select--open' : 'calculator__select'

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
        if(information.ordering) {
            return(
                <form className='calculator__form form' onSubmit={onFormSubmitting}>
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

    const getElementOfferSwich = () => {
        if(getMortgageAmount() < MIN_CREDIT) {
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
                                <span className='offer__text offer__text--margin'>{getMortgageAmount() + ' рублей'}</span>
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

    const getElementOfferStep = () => information.secondStep === true ? getElementOfferSwich() : ''

    const getElementNextStep = () => {
        if(information.secondStep) {
            return(
                <>
                    <span className='calculator__text calculator__text--margin'>Шаг 2. Введите параметры кредита</span>
                    <div className='calculator__inputValue inputValue'>
                        <button className='inputValue__button inputValue__button--left' onClick={onButtonDecrease}></button>
                        <label className='calculator__clarification'>Стоимость недвижимости
                        <input className='inputValue__input' value={information.propertyValue  + ' рублей'} onChange={onChangePrice}></input>
                        </label>
                        <button className='inputValue__button inputValue__button--right' onClick={onButtonZoom}></button>
                    </div>
                    <span className='calculator__options'>От 1 200 000  до 25 000 000 рублей</span>
                    <label className='calculator__clarification calculator__clarification--margin'>Первоначальный взнос
                        <input className='calculator__contribution' value={information.anInitialFee + ' рублей'} onChange={changeInContribution} />
                    </label>
                    <input className='calculator__slider' type="range" min="10" max="100" step="5" value={information.contribution} onChange={onChangePercent} />
                    <span className='calculator__textcontribution'>{information.contribution + '%'}</span>
                    <label className='calculator__textterm'>Срок кредитования
                        <input className='calculator__year' value={information.year + ' лет'} onChange={onChangeOfYear} />
                    </label>
                    <input className='calculator__slider calculator__slider--margin' type="range" min="5" max="30" step="1" value={information.year} onChange={onChangeYear} />
                    <div className='calculator__textconteiner'>
                        <span className='calculator__textyear'>5 лет</span>
                        <span className='calculator__textyear'>30 лет</span>
                    </div>
                    <label className='calculator__conteinercapital'>
                        <input className='calculator__inputcapital' type="checkbox" onChange={onChangeCapital}/>
                        <span className={checkCapital}>Использовать материнский капитал</span>
                    </label>
                </>
            )
        }
    }

    return(
        <form className='calculator' onSubmit={onOrdering}>
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
        </form>
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
