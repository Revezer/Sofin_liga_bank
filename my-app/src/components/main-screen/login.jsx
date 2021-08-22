import React from 'react'
import loginImg from '../../img/login-img.svg';
import {switchLogin} from '../../store/action';
import {connect} from 'react-redux';

const Login = (props) => {
    const {switchingLogin} = props

    const closeLogin = () => {
        switchingLogin(false)
    }

    return(
        <form className='login'>
            <img className='login__img' src={loginImg} alt='логотип банка'></img>
            <button className='login__esc' onClick={closeLogin}></button>
            <span className='login__desc'>Логин</span>
            <input className='login__input' type='login'></input>
            <span className='login__desc login__desc--margin'>Пароль</span>
            <input className='login__input login__input--margin' type="password"></input>
            <button className='login__button'>Войти</button>
            <a className='login__link' href='*'>Забыли пароль?</a>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    switchingLogin(bool) {
        dispatch(switchLogin(bool))
    }
})

export default connect(null, mapDispatchToProps)(Login);

