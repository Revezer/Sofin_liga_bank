import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Scrollbar} from 'swiper';

SwiperCore.use([Pagination, Scrollbar]);

const ServiceSwiper = () => {

    return(
        <Swiper className='service__slider' pagination={{ clickable: true }}>
            <SwiperSlide className='service__container service__conteiner-pig'>
                <h3 className='service__title'>
                    Вклады Лига Банка – это выгодная инвестиция в свое будущее
                </h3>
                <div className='service__text-conteiner'>
                    <span className='service__text'>Проценты по вкладам до 7%</span>
                    <span className='service__text'>Разнообразные условия</span>
                    <span className='service__text'>
                        Возможность ежемесячной
                        капитализации или вывод 
                        процентов на банковскую карту
                    </span>
                </div>
                <a href='*' className='service__button'>Узнать подробнее</a>
            </SwiperSlide>
            <SwiperSlide className='service__container service__conteiner-car'>
                <h3 className='service__title'>
                    Лига Банк выдает кредиты под любые цели
                </h3>
                <div className='service__text-conteiner service__text-conteiner--height'>
                    <span className='service__text'>Ипотечный кредит</span>
                    <span className='service__text'>Автокредит</span>
                    <span className='service__text'>Потребительский кредит</span>
                </div>
                <span className='service__content-text'>
                    Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим
                    <a href='*' className='service__text-button'>кредитным калькулятором</a>
                </span>
            </SwiperSlide>
            <SwiperSlide className='service__container service__conteiner-lock'>
                <h3 className='service__title'>
                    Лига Страхование — застрахуем все что захотите
                </h3>
                <div className='service__text-conteiner service__text-conteiner--height'>
                    <span className='service__text'>Автомобильное страхование</span>
                    <span className='service__text'>Страхование жизни и здоровья</span>
                    <span className='service__text'>Страхование недвижимости</span>
                </div>
                <a href='*' className='service__button'>Узнать подробнее</a>
            </SwiperSlide>
            <SwiperSlide className='service__container service__conteiner-telephone'>
                <h3 className='service__title service__title--nowrap'>
                    Лига Банк — это огромное количество онлайн-сервисов для вашего удобства
                </h3>
                <div className='service__text-conteiner service__text-contener-fourth'>
                    <span className='service__text'>
                        Мобильный банк, который всегда под рукой
                    </span>
                    <span className='service__text service__text--width'>
                        Приложение Лига-проездной
                        позволит вам оплачивать
                        билеты по всему миру
                    </span>
                </div>
                <a href='*' className='service__button'>Узнать подробнее</a>
            </SwiperSlide>
        </Swiper>
    )
}

export default ServiceSwiper;
