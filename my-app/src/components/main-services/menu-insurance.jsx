import React from 'react'

const Insurance = () => {
    return(
        <div className='service__container service__conteiner-lock'>
            <h3 className='service__title'>
                {'Лига Страхование — застрахуем\nвсе что захотите'}
            </h3>
            <div className='service__text-conteiner service__text-conteiner--height'>
                <span className='service__text'>Автомобильное страхование</span>
                <span className='service__text'>Страхование жизни и здоровья</span>
                <span className='service__text'>Страхование недвижимости</span>
            </div>
            <button className='service__button'>Узнать подробнее</button>
        </div>
    )
}

export default Insurance
