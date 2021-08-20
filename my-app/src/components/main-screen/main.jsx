import React from 'react'
import CalculatorComponent from './calculator'
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
                <CalculatorComponent />
            </main>
        </>
    )
}

export default Main;
