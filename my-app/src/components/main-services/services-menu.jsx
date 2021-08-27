import React from 'react'
import iconVault from '../../img/vault.svg'
import iconCards from '../../img/cards.svg'
import iconSecurity from '../../img/security.svg'
import iconPhone from '../../img/phone.svg'
import DepositsComponent from './menu-deposits'
import CreditComponent from './menu-credit'
import InsuranceComponent from './menu-insurance'
import OnlineComponent from './menu-online'
import {connect} from 'react-redux'
import {selectedMenu} from '../../store/action'

 
const ServiceMenu = (props) => {
    const {selectedMenu, switchingMenu} = props

    const getInformationOutput = (selected) => {
        switch(selected) {
            case 'deposit':
                return <DepositsComponent />
            case 'credit':
                return <CreditComponent />
            case 'insurance':
                return <InsuranceComponent />
            case 'online': 
                return <OnlineComponent />
            default:
                return <DepositsComponent />
        } 
    }

    const selectedButtonDeposit = () => switchingMenu('deposit')
    const selectedButtonCredit = () => switchingMenu('credit')
    const selectedButtonInsurance = () => switchingMenu('insurance')
    const selectedButtonOnline = () => switchingMenu('online')

    const activeButtonDeposit = selectedMenu === 'deposit' ? 'menu__button menu__button--active' : 'menu__button'
    const activeButtonCredit = selectedMenu === 'credit' ? 'menu__button menu__button--active' : 'menu__button'
    const activeButtonInsurance = selectedMenu === 'insurance' ? 'menu__button menu__button--active' : 'menu__button'
    const activeButtonOnline = selectedMenu === 'online' ? 'menu__button menu__button--active' : 'menu__button'


    return(
        <div className='service'>
            <div className='service__menu menu'>
                <button className={activeButtonDeposit} onClick={selectedButtonDeposit}>
                    <img className='menu__vault' alt='иконка' src={iconVault} />
                    <span className='menu__text'>Вклады</span>
                </button>
                <button className={activeButtonCredit} onClick={selectedButtonCredit}>
                    <img className='menu__cards' alt='иконка' src={iconCards} />
                    <span className='menu__text'>Кредиты</span>
                </button>
                <button className={activeButtonInsurance} onClick={selectedButtonInsurance}>
                    <img className='menu__security' alt='иконка' src={iconSecurity} />
                    <span className='menu__text'>Страхование</span>
                </button>
                <button className={activeButtonOnline} onClick={selectedButtonOnline}>
                    <img className='menu__phone' alt='иконка' src={iconPhone}/>
                    <span className='menu__text'>Онлайн-сервисы</span>
                </button>
            </div>
            {getInformationOutput(selectedMenu)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedMenu: state.selectedMenu
})

const mapDispatchToProps = (dispatch) => ({
    switchingMenu(selected) {
        dispatch(selectedMenu(selected))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ServiceMenu);

