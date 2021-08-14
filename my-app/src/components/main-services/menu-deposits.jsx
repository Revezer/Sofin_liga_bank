import React from 'react'

const Deposits = () => {
    return(
        <div className='service__container service__conteiner-pig'>
            <h3 className='service__title'>
                {'Вклады Лига Банка – это выгодная\nинвестиция в свое будущее'}
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
        <button className='service__button'>Узнать подробнее</button>
        </div>
    )
}

export default Deposits
