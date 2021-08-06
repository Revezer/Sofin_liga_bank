import React from 'react';
import logoDesktop from '../../img/logo-desktop.svg';
import logoTablet from '../../img/logo-tablet.svg';
import logoMobile from '../../img/logo-mobile.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__conteiner'>
                <div className='header__logomenu'>
                    <button className='header__button' />
                    <a href='*' className='header__logo'>
                        <picture className='logo__img'>
                            <source media='(min-width: 1024px)' srcset={logoDesktop} />
                            <source media='(min-width: 768px)' srcset={logoTablet} />
                            <img src={logoMobile} alt='логотип банка' />
                        </picture>
                    </a>
                </div>
                <ul className='header__list'>
                    <li className='list__element'><a href='*' className='list__link'>Услуги</a></li>
                    <li className='list__element'><a href='*' className='list__link'>Расcчитать кредит</a></li>
                    <li className='list__element'><a href='*' className='list__link'>Конвертер валют</a></li>
                    <li className='list__element'><a href='*' className='list__link'>Контакты</a></li>
                </ul>
                <a href='*' className='header__login'>
                    <span className='login__text'>Войти в Интернет банк</span>
                </a>
            </div>
        </header>
    )
};

export default Header;
