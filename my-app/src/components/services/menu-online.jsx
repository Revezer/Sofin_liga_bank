import React from 'react'

const Online = () => {
    return(
        <div className='service__container service__conteiner-telephone'>
            <h3 className='service__title service__title--nowrap'>
                {'Лига Банк — это огромное\nколичество онлайн-сервисов\nдля вашего удобства'}
            </h3>
            <div className='service__text-conteiner service__text-contener-fourth'>
                <span className='service__text'>
                    {'Мобильный банк,\nкоторый всегда под рукой'}
                </span>
                <span className='service__text service__text--width'>
                    Приложение Лига-проездной
                    позволит вам оплачивать
                    билеты по всему миру
                </span>
            </div>
            <a href='*' className='service__button'>Узнать подробнее</a>
        </div>
    )
}

export default Online
