import React, { useState} from 'react';
import api from '../../services/api';

export default function Brand({ history }){
    
    const [name ,setName] = useState('');

    console.log(name);
    
    async function handleSubmit(event){
        event.preventDefault();
        
        const response = await api.post('/brands', {
           name 
        });

        console.log(response.data)

        history.push('/models');
    }
    return ( 
       
        <>
          <form onSubmit = {handleSubmit}>
            <label htmlFor="name"> Marca * </label>
            <input 
              type="text" 
              id="name" 
              placeholder="Marca do equipamento"
              value={name}
              onChange={event => setName(event.target.value)}
            />
        
    
            <button className= "btn"type="submit">Salvar</button>
    
    
          </form>
        </>
    )

}