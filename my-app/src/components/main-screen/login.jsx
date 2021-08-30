import React, {useState, useRef} from 'react'
import loginImg from '../../img/login-img.svg';
import {setSwitchLogin} from '../../store/action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

const Login = (props) => {
    const {switchingLogin} = props

    const loginRef = useRef();
    const passwordRef = useRef();

    const [show, setShow] = useState(false)

    const onLoginClose = () => {
        switchingLogin(false)
    }

    const onPasswordShow = (evt) => {
        evt.preventDefault()
        if(show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    const showPassword = show === true ? 'text' : 'password'

    return(
        <form className='login'>
            <img className='login__img' src={loginImg} alt='логотип банка'></img>
            <button className='login__esc' onClick={onLoginClose}></button>
            <span className='login__desc'>Логин</span>
            <input ref={loginRef} className='login__input' type='login'></input>
            <span className='login__desc login__desc--margin'>Пароль</span>
            <input ref={passwordRef} className='login__input login__input--margin' type={showPassword}></input>
            <button className='login__password' onClick={onPasswordShow}></button>
            <button className='login__button' type='submit'>Войти</button>
            <a className='login__link' href='*'>Забыли пароль?</a>
        </form>
    )
}

Login.propTypes = {
    switchingLogin: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    switchingLogin(bool) {
        dispatch(setSwitchLogin(bool))
    }
})

export default connect(null, mapDispatchToProps)(Login);

