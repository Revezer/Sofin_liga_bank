import React from 'react';
import logoDesktop from '../../img/logo-desktop.svg';
import logoTablet from '../../img/logo-tablet.svg';
import logoMobile from '../../img/logo-mobile.svg';
import {connect} from 'react-redux';
import {menuToggle, setSwitchLogin} from '../../store/action';
import PropTypes from 'prop-types'

const Header = (props) => {
    const {menu, switchingMenu, switchingLogin} = props;

    const onMenuOpen = () => {
        switchingMenu(true)
    }

    const onMenuClose = () => {
        switchingMenu(false)
    }

    const onLoginOpen = () => {
        switchingLogin(true)
        window.onkeydown = (evt) => {
            if ( evt.keyCode === 27 ) {
                switchingLogin(false)
            }
        }
    }

    const headerConteiner = menu ? 'header__conteiner header__conteiner-open' : 'header__conteiner';
    const headerList = menu ? 'header__list header__list-open list' : 'header__list list';
    const listElement = menu ? 'list__element list__element-open' : 'list__element';
    const headerLogin = menu ? 'header__login header__login-open' : 'header__login';
    const loginText = menu ? 'header__logintext header__logintext-open' : 'header__logintext';
    const closeButton = menu ? <button onClick={onMenuClose} className='header__close header__close-open'></button> : '';

    return (
        <header className='header'>
            <div className={headerConteiner}>
                <div className='header__logomenu'>
                    <button onClick={onMenuOpen} className='header__button' />
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
                <button href='*' className={headerLogin} onClick={onLoginOpen}>
                    <span className={loginText}>Войти в Интернет-банк</span>
                </button>
                {closeButton}
            </div>
        </header>
    )
}

Header.propTypes = {
    menu: PropTypes.bool.isRequired,
    switchingMenu: PropTypes.func.isRequired,
    switchingLogin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    menu: state.menu
})

const mapDispatchToProps = (dispatch) => ({
    switchingMenu(mode) {
        dispatch(menuToggle(mode))
    },
    switchingLogin(bool) {
        dispatch(setSwitchLogin(bool))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
