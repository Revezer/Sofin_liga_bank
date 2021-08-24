import React from 'react'
import CalculatorComponent from './calculator'
import HeaderComponent from './header'
import ServicesComponent from './services'
import SliderComponent from './slider'
import MapComponent from './map'
import {connect} from 'react-redux';
import LoginComponent from './login'
import FooterComponent from './footer'

const Main = (props) => {
    const {login} = props

    const examinationLogin = login === true ? <LoginComponent /> : ''

    return(
        <>
            <HeaderComponent />
            {examinationLogin}
            <main>
                <SliderComponent />
                <ServicesComponent />
                <CalculatorComponent />
                <MapComponent />
            </main>
            <FooterComponent />
        </>
    )
}

const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
