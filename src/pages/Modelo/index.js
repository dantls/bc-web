import React, { useState,useEffect} from 'react';
import api from '../../services/api';

 export default function Modelo({ history }){
    
    const [brand ,setBrand] = useState([]);
    const [modelo ,setModelo] = useState('');
    const [choiseBrand ,setChoiseBrand] = useState('');

    useEffect(()=>{
      async function loadBrands(){
        const response = await api.get('brands');
        setBrand(response.data);
      }
      loadBrands();
  },[]);

  
   async function handleSubmit(event){
      event.preventDefault();
  
      const response = await api.post('/models',{"name":modelo, "brand_id":choiseBrand});

      console.log(response);
      history.push('/home');
    }
    
    return ( 
        <>
          <form onSubmit = {handleSubmit}>

            <label htmlFor="name"> Marca * </label>
            <select 
              value={choiseBrand}
              onChange={
                event => setChoiseBrand(event.target.value)
              }> 
              {
                brand.map(
                  (item) => {
                    return (
                      <option value={item.id}>{item.name}</option>)
                  }
                )
              }
            </select>
          
            <label htmlFor="Modelo"> Modelo * </label>
            <input 
              type="text" 
              id="modelo" 
            placeholder="Modelo do equipamento"
            value={modelo}
            onChange={event =>setModelo(event.target.value)}
            />
            <button className= "btn"type="submit">Salvar</button>
    
          </form>
        </>
        
        )

}