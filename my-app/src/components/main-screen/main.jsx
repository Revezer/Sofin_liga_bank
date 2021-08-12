import React from 'react'
import HeaderComponent from './header'
import ServicesComponent from './services'
import SliderComponent from './slider'

const Main = () => {
    return(
        <>
            <HeaderComponent />
            <main>
                <SliderComponent />
                <ServicesComponent />
            </main>
        </>
    )
}

export default Main;
