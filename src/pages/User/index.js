import React, {useState} from 'react';
import api from '../../services/api';

export default function User({ history }){
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        
        const response = await api.post('/users', {  email,name,password });

        console.log(response);

        //const{ email,passwrd } = response.data;

       // localStorage.setItem('user', email);

        history.push('/home');
    }
    return ( 
        <>
 
        <form onSubmit = {handleSubmit}>
          <label htmlFor="email"> E-mail * </label>
          <input 
            type="email" 
            id="email" 
           placeholder="Seu e-mail"
           value={email}
           onChange={event =>setEmail(event.target.value)}
          />
          <label htmlFor="name"> Nome Completo * </label>
          <input 
            type="text" 
            id="name" 
           placeholder="Seu nome completo"
           value={name}
           onChange={event =>setName(event.target.value)}
          />
          <label htmlFor="password"> Senha * </label>
          <input 
            type="password" 
            id="password" 
            placeholder="Digite sua senha"
           value={password}
           onChange={event =>setPassword(event.target.value)}
          />
  
          <button className= "btn"type="submit">Salvar</button>
  
  
        </form>
        </>
        )

}