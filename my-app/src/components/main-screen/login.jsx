import React, {useState, useRef} from 'react'
import loginImg from '../../img/login-img.svg';
import {switchLogin} from '../../store/action';
import {connect} from 'react-redux';

const Login = (props) => {
    const {switchingLogin} = props

    const loginRef = useRef();
    const passwordRef = useRef();

    const [show, setShow] = useState(false)

    const closeLogin = () => {
        switchingLogin(false)
    }

    const handlerPassword = (evt) => {
        evt.preventDefault()
        if(show === true) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    const showPassword = show === true ? 'text' : 'password'

    return(
        <form className='login'>
            <img className='login__img' src={loginImg} alt='логотип банка'></img>
            <button className='login__esc' onClick={closeLogin}></button>
            <span className='login__desc'>Логин</span>
            <input ref={loginRef} className='login__input' type='login'></input>
            <span className='login__desc login__desc--margin'>Пароль</span>
            <input ref={passwordRef} className='login__input login__input--margin' type={showPassword}></input>
            <button className='login__password' onClick={handlerPassword}></button>
            <button className='login__button' type='submit'>Войти</button>
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

