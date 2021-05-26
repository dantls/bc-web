import React, {useState} from 'react';
import api from '../../services/api';

import './Login.css';
import logo from '../../assets/logo.jpg';

export default function Login({ history }){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        
        const response = await api.post('/sessions', {  email ,password });

        history.push('/home');
    }
    return ( 
        <div className="logo-content">
          <div className="logo">
            <img src ={logo} alt="DevicesControl"/>
          </div>
        
          <form onSubmit = {handleSubmit}>
            <label htmlFor="email"> E-mail * </label>
            <input 
              type="email" 
              id="email" 
            placeholder="Seu e-mail"
            value={email}
            onChange={event =>setEmail(event.target.value)}
            />
            <label htmlFor="password"> Senha * </label>
            <input 
              type="password" 
              id="password" 
              placeholder="Digite sua senha"
            value={password}
            onChange={event =>setPassword(event.target.value)}
            />
    
            <button className= "btn"type="submit">Entrar</button>
    
    
          </form>
        </div>
        )

}