import React from 'react'
import logo from '../../img/footer-logo.svg'
import logoTablet from '../../img/footer-logo-tablet.svg'
import logoDesktop from '../../img/footer-logo-desktop.svg'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import twitter from '../../img/twitter.svg'
import youtube from '../../img/youtube.svg'

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer__conteiner'>
                <div className='footer__cont'>
                    <picture className='footer__image'>
                        <source media='(min-width: 1024px)' srcSet={logoDesktop} />
                        <source media='(min-width: 768px)' srcSet={logoTablet} />
                        <img className='footer__logo' alt='логотип банка' src={logo}></img>
                    </picture>  
                    <span className='footer__address'>
                        150015, г. Москва, ул. Московская, д. 32
                        Генеральная лицензия Банка России №1050
                        Ⓒ Лига Банк, 2019
                    </span>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <a className='footer__link' href='*'>Услуги</a>
                        </li>
                        <li className='footer__item'>
                            <a className='footer__link' href='*'>Рассчитать кредит</a>
                        </li>
                        <li className='footer__item'>
                            <a className='footer__link' href='*'>Контакты</a>
                        </li>
                        <li className='footer__item'>
                            <a className='footer__link' href='*'>Задать вопрос</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__boxs'>
                    <div className='footer__box footer__box--mobile'>
                        <a className='footer__link footer__link--mobile' href='*'>*0904</a>
                        <span className='footer__text'>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</span>
                    </div>
                    <div className='footer__box footer__box--telephone'>
                        <a className='footer__link footer__link--telephone' href='tel:88001112233'>8 800 111 22 33</a>
                        <span className='footer__text footer__text--width'>Бесплатный для всех городов России</span>
                    </div>
                    <ul className='footer__socials'>
                        <li>
                            <a  href='*'>
                                <img src={facebook} alt='facebook'/>
                            </a>
                        </li>
                        <li>
                            <a  href='*'>
                                <img src={instagram} alt='instagram'/>
                            </a>
                        </li>
                        <li>
                            <a  href='*'>
                                <img src={twitter} alt='twitter'/>
                            </a>
                        </li>
                        <li>
                            <a  href='*'>
                                <img src={youtube} alt='youTube'/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
