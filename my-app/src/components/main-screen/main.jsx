import React from 'react'
import CalculatorComponent from './calculator'
import HeaderComponent from '../header/header'
import ServicesComponent from '../main-services/services'
import SliderComponent from './slider'
import MapComponent from './map'
import {connect} from 'react-redux';
import LoginComponent from './login'
import FooterComponent from '../footer/footer'
import PropTypes from 'prop-types'

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

Main.propTypes = {
    login: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    login: state.login
})


export default connect(mapStateToProps, null)(Main);
