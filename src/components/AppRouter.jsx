import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import {PrivateRoutes, publicRoutes,} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth,setIsAuth}= useContext(AuthContext)
    return (
        isAuth
            ?
                <Routes>

                    {PrivateRoutes.map(item=>
                        <Route path={item.path} element={item.component}/>
                    )}


                    <Route path="*" element={<Navigate to={"/posts"}/>}/>

                    </Routes>
            :
            <Routes>

                {publicRoutes.map(item=>
                    <Route path={item.path} element={item.component}/>
                )}


                <Route path="*" element={<Navigate to={"/login"}/>}/>

            </Routes>


    );
};

export default AppRouter;