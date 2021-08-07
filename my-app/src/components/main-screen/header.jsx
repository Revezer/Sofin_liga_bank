import React from 'react';
import logoDesktop from '../../img/logo-desktop.svg';
import logoTablet from '../../img/logo-tablet.svg';
import logoMobile from '../../img/logo-mobile.svg';
import {connect} from 'react-redux';
import {menuToggle} from '../../store/action';

const Header = (props) => {
    const {menu, switchingMenu} = props;

    const openMenu = () => {
        switchingMenu(true)
    }

    const closeMenu = () => {
        switchingMenu(false)
    }

    const headerConteiner = menu === true ? 'header__conteiner header__conteiner-open' : 'header__conteiner';
    const headerList = menu === true ? 'header__list header__list-open' : 'header__list';
    const listElement = menu === true ? 'list__element list__element-open' : 'list__element';
    const headerLogin = menu === true ? 'header__login header__login-open' : 'header__login';
    const loginText = menu === true ? 'login__text login__text-open' : 'login__text';
    const closeButton = menu === true ? <button onClick={closeMenu} className='header__close header__close-open'></button> : '';

    return (
        <header className='header'>
            <div className={headerConteiner}>
                <div className='header__logomenu'>
                    <button onClick={openMenu} className='header__button' />
                    <a href='*' className='header__logo'>
                        <picture className='logo__img'>
                            <source media='(min-width: 1024px)' srcset={logoDesktop} />
                            <source media='(min-width: 768px)' srcset={logoTablet} />
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
                <a href='*' className={headerLogin}>
                    <span className={loginText}>Войти в Интернет-банк</span>
                </a>
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
