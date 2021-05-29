import React from 'react';

import { BrowserRouter,Switch, Route } from 'react-router-dom';

import {Brand} from './pages/Brand';

import {Home} from './pages/Home';

import {Modelo} from './pages/Modelo';

import {Type} from './pages/Type'; 

import {Device} from './pages/Device';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"exact component = {Home}/>
                <Route path="/devices" component = {Device}/>
                <Route path="/brands" component = {Brand}/>
                <Route path="/models" component = {Modelo}/>
                <Route path="/types" component = {Type}/>
            </Switch>
        </BrowserRouter>


    );
}