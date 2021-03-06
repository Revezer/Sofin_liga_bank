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
        window.onkeydown = (evt) => {
            if ( evt.keyCode === 27 ) {
                onMenuClose()
            }
        }
        document.body.classList.add('openPopUp')
    }

    const onMenuClose = () => {
        switchingMenu(false)
        document.body.classList.remove('openPopUp')
    }

    const onLoginOpen = () => {
        document.body.classList.add('openPopUp')
        switchingLogin(true)
        window.onkeydown = (evt) => {
            if ( evt.keyCode === 27 ) {
                switchingLogin(false)
                document.body.classList.remove('openPopUp')
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
                            <img src={logoMobile} alt='?????????????? ??????????' />
                        </picture>
                    </a>
                </div>
                <ul className={headerList}>
                    <li className={listElement}><a href='*' className='list__link'>????????????</a></li>
                    <li className={listElement}><a href='*' className='list__link'>??????c???????????? ????????????</a></li>
                    <li className={listElement}><a href='*' className='list__link'>?????????????????? ??????????</a></li>
                    <li className={listElement}><a href='*' className='list__link'>????????????????</a></li>
                </ul>
                <button href='*' className={headerLogin} onClick={onLoginOpen}>
                    <span className={loginText}>?????????? ?? ????????????????-????????</span>
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
