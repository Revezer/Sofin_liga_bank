import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Pagination, Scrollbar} from 'swiper';
import cardsTablet from '../../img/cards-tablet.png';
import cardsDesktop from '../../img/cards-desktop.png'

SwiperCore.use([Autoplay, Pagination, Scrollbar]);

const Slider = () => {

    const onTransitionMap = (evt) => {
        evt.preventDefault()
        const map = document.getElementById('map')
        map.scrollIntoView();
    }

    const onTransitionCalculator = (evt) => {
        evt.preventDefault()
        const calculator = document.getElementById('calculator')
        calculator.scrollIntoView()
    }
    
    return(
        <Swiper className='slider' loop={true} autoplay={{ delay: 4000 }} pagination={{ clickable: true }}>
            <SwiperSlide className='slider__item slider__item-card item'>
                <div className='item__conteiner'>
                    <h2 className='item__title item__title-white'>Лига Банк</h2>
                    <p className='item__text item__text-white'>Кредиты на любой случай</p>
                    <a href='*' onClick={onTransitionCalculator} className='item__button item__button-white'>Рассчитать кредит</a>
                </div>
                <picture>
                    <source media='(min-width: 1024px)' srcSet={cardsDesktop} />
                    <img className='item__img' alt='карта банка' src={cardsTablet}></img>
                </picture>
            </SwiperSlide>
            <SwiperSlide className='slider__item slider__item-boy item'>
                <div className='item__conteiner'>
                    <h2 className='item__title'>Лига Банк</h2>
                    <p className='item__text item__text-width'>Ваша уверенность в завтрашнем дне</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slider__item slider__item-girl item'>
                <div className='item__conteiner'>
                    <h2 className='item__title'>Лига Банк</h2>
                    <p className='item__text'>Всегда рядом</p>
                    <a href='*' onClick={onTransitionMap} className='item__button'>Найти отделение</a>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider;
