import React, {useContext} from 'react';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth,setIsAuth}= useContext(AuthContext)
    const login = (e)=>{
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth',"true")
    }
    return (
        <div>
            <h1>страница для логина</h1>
            <form action="" onSubmit={login}>
                <MyInput type="text" placeholder="login"/>
                <MyInput type="password" placeholder="password"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;