import React from 'react'

const Credit = () => {
    return(
        <div className='service__container service__conteiner-car'>
            <h3 className='service__title'>
                {'Лига Банк выдает кредиты\nпод любые цели'}
            </h3>
            <div className='service__text-conteiner service__text-conteiner--height'>
                <span className='service__text'>Ипотечный кредит</span>
                <span className='service__text'>Автокредит</span>
                <span className='service__text'>Потребительский кредит</span>
            </div>
            <span className='service__content-text'>
                {'Рассчитайте ежемесячный платеж\nи ставку по кредиту воспользовавшись\nнашим'}
                <button className='service__text-button'>кредитным калькулятором</button>
            </span>
        </div>
    )
}

export default Credit
