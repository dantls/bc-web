import React from 'react';

import { BrowserRouter,Switch, Route } from 'react-router-dom';

import Login from './pages/Login';

import Brand from './pages/Brand';

import Modelo from './pages/Modelo';

import Home from './pages/Home';

import User from './pages/User';

import Type from './pages/Type'; 

import Device from './pages/Device';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"exact component = {Login}/>
                <Route path="/home" component = {Home}/>
                <Route path="/devices" component = {Device}/>
                <Route path="/brands" component = {Brand}/>
                <Route path="/models" component = {Modelo}/>
                <Route path="/users" component = {User}/>
                <Route path="/types" component = {Type}/>
            </Switch>
        </BrowserRouter>


    );
}