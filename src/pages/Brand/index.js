import { useState} from 'react';
import { api } from '../../services/api';
import { Container, Form } from "./styles";

export function Brand({history}){
    
    const [name ,setName] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        
        await api.post('/brands', {
           name 
        });
        history.push('/models');
    }
    return ( 
       
        <Container>
          <Form onSubmit = {handleSubmit}>
            <label htmlFor="name"> Marca * </label>
            <input 
              type="text" 
              id="name" 
              placeholder="Marca do equipamento"
              value={name}
              onChange={event => {
                  setName(event.target.value)
                }
              }
            />
        
    
            <button className= "btn"type="submit">Salvar</button>
    
    
          </Form>
        </Container>
    )

}