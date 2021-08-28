import React from 'react'
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

    const getSelectedButton = (evt) => {
        console.log(evt.target.value)
        switchingMenu(evt.target.value)
    }

    const activeButtonDeposit = selectedMenu === 'deposit' ? 'menu__button menu__button-deposit menu__button--active' : 'menu__button menu__button-deposit'
    const activeButtonCredit = selectedMenu === 'credit' ? 'menu__button menu__button-credit menu__button--active' : 'menu__button menu__button-credit'
    const activeButtonInsurance = selectedMenu === 'insurance' ? 'menu__button menu__button-insurance menu__button--active' : 'menu__button menu__button-insurance'
    const activeButtonOnline = selectedMenu === 'online' ? 'menu__button menu__button-online menu__button--active' : 'menu__button menu__button-online'


    return(
        <div className='service'>
            <div className='service__menu menu'>
                <button className={activeButtonDeposit} value='deposit' onClick={getSelectedButton}>Вклады</button>
                <button className={activeButtonCredit} value='credit' onClick={getSelectedButton}>Кредиты</button>
                <button className={activeButtonInsurance} value='insurance' onClick={getSelectedButton}>Страхование</button>
                <button className={activeButtonOnline} value='online' onClick={getSelectedButton}>Онлайн-сервисы</button>
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

