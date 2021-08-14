import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import cardsTablet from '../../img/cards-tablet.png';
import cardsDesktop from '../../img/cards-desktop.png'

SwiperCore.use([Autoplay]);

const Slider = () => {
    
    return(
        <Swiper className='slider' loop={true} autoplay={{ delay: 4000 }}>
            <SwiperSlide className='slider__item slider__item-card'>
                <div className='item__conteiner'>
                    <h2 className='item__title item__title-white'>Лига Банк</h2>
                    <p className='item__text item__text-white'>Кредиты на любой случай</p>
                    <button className='item__button item__button-white'>Рассчитать кредит</button>
                </div>
                <picture>
                    <source media='(min-width: 1024px)' srcSet={cardsDesktop} />
                    <img className='item__img' alt='карта банка' src={cardsTablet}></img>
                </picture>
            </SwiperSlide>
            <SwiperSlide className='slider__item slider__item-boy'>
                <div className='item__conteiner'>
                    <h2 className='item__title'>Лига Банк</h2>
                    <p className='item__text item__text-width'>Ваша уверенность в завтрашнем дне</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slider__item slider__item-girl'>
                <div className='item__conteiner'>
                    <h2 className='item__title'>Лига Банк</h2>
                    <p className='item__text'>Всегда рядом</p>
                    <button className='item__button'>Найти отделение</button>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider;
