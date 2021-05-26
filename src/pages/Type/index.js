import React, { useState} from 'react';
import api from '../../services/api';


export default function Type({ history }){
    
    const [name ,setName] = useState('');
    
  
    async function handleSubmit(event){
        event.preventDefault();
        
        console.log(name);
        const response = await api.post('/types', {  name });

        console.log(response);

        //const{ name } = response.data;

       // localStorage.setItem('user', id);

       history.push('/home');
    }
    return ( 
       
        <>
        
        <form onSubmit = {handleSubmit}>
          <label htmlFor="name"> Tipo de equipamento * </label>
          <input 
            type="text" 
            id="name" 
           placeholder="Tipo do equipamento"
           value={name}
           onChange={event => setName(event.target.value)}
          />
       
  
          <button className= "btn"type="submit">Salvar</button>
  
  
        </form>
        </>
        
        )

}