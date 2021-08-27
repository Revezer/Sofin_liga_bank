import React from 'react';
import logoDesktop from '../../img/logo-desktop.svg';
import logoTablet from '../../img/logo-tablet.svg';
import logoMobile from '../../img/logo-mobile.svg';
import {connect} from 'react-redux';
import {menuToggle, switchLogin} from '../../store/action';

const Header = (props) => {
    const {menu, switchingMenu, switchingLogin} = props;

    const openMenu = () => {
        switchingMenu(true)
    }

    const closeMenu = () => {
        switchingMenu(false)
    }

    const openLogin = () => {
        switchingLogin(true)
        window.onkeydown = (evt) => {
            if ( evt.keyCode === 27 ) {
                switchingLogin(false)
            }
        }
    }

    const headerConteiner = menu === true ? 'header__conteiner header__conteiner-open' : 'header__conteiner';
    const headerList = menu === true ? 'header__list header__list-open list' : 'header__list list';
    const listElement = menu === true ? 'list__element list__element-open' : 'list__element';
    const headerLogin = menu === true ? 'header__login header__login-open' : 'header__login';
    const loginText = menu === true ? 'header__logintext header__logintext-open' : 'header__logintext';
    const closeButton = menu === true ? <button onClick={closeMenu} className='header__close header__close-open'></button> : '';

    return (
        <header className='header'>
            <div className={headerConteiner}>
                <div className='header__logomenu'>
                    <button onClick={openMenu} className='header__button' />
                    <a href='*' className='header__logo logo'>
                        <picture className='logo__img'>
                            <source media='(min-width: 1024px)' srcSet={logoDesktop} />
                            <source media='(min-width: 768px)' srcSet={logoTablet} />
                            <img src={logoMobile} alt='логотип банка' />
                        </picture>
                    </a>
                </div>
                <ul className={headerList}>
                    <li className={listElement}><a href='*' className='list__link'>Услуги</a></li>
                    <li className={listElement}><a href='*' className='list__link'>Расcчитать кредит</a></li>
                    <li className={listElement}><a href='*' className='list__link'>Конвертер валют</a></li>
                    <li className={listElement}><a href='*' className='list__link'>Контакты</a></li>
                </ul>
                <button href='*' className={headerLogin} onClick={openLogin}>
                    <span className={loginText}>Войти в Интернет-банк</span>
                </button>
                {closeButton}
            </div>
        </header>
    )
};

const mapStateToProps = (state) => ({
    menu: state.menu
})

const mapDispatchToProps = (dispatch) => ({
    switchingMenu(mode) {
        dispatch(menuToggle(mode))
    },
    switchingLogin(bool) {
        dispatch(switchLogin(bool))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
