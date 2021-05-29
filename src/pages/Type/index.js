import { useState} from 'react';
import {api} from '../../services/api';
import {Form} from './styles';


export function Type({ history }){
    
    const [name ,setName] = useState('');
    
  
    async function handleSubmit(event){
      event.preventDefault();
      
      await api.post('/types', {  name });

      history.push('/home');
    }
    return (  
      <>
        <Form onSubmit = {handleSubmit}>
          <label htmlFor="name"> Tipo de equipamento * </label>
          <input 
            type="text" 
            id="name" 
          placeholder="Tipo do equipamento"
          value={name}
          onChange={event => setName(event.target.value)}
          />
      
  
          <button className= "btn"type="submit">Salvar</button>
  
  
        </Form>
      </>
      
    )

}