import React, {useEffect, useState} from 'react';
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

const App = () => {
    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, []);
    const [isAuth, setIsAuth] = useState(false)
    return (
<AuthContext.Provider value={{
    isAuth,
    setIsAuth
    
}}>
    <BrowserRouter>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter>
</AuthContext.Provider>
    );
};

export default App;