import React, { useState,useEffect} from 'react';
import api from '../../services/api';

 export default function Device({ history }){
    
    const [brand ,setBrand] = useState([]);
    const [modelo ,setModelo] = useState([]);
    const [code ,setCode] = useState('');
    const [serie ,setSerie] = useState('');
    const [type ,setType] = useState([]);
    const [purchase ,setPurchase] = useState('');
    const [choiseType ,setChoiseType] = useState('');
    const [choiseBrand ,setChoiseBrand] = useState('');
    const [choiseModel ,setChoiseModel] = useState('');
    useEffect(()=>{
      async function loadBrands(){
        const response = await api.get('/brands');
       //   const user_id = localStorage.getItem('user');
        setBrand(response.data);
       
        //teste = response.data;//setSpots(response.data);
      }
      async function loadTypes(){
        const response = await api.get('/types');
        //   const user_id = localStorage.getItem('user');
         setType(response.data);
      }
      async function loadModels(){
        //{brand_id:choiseBrand}
        const response = await api.get(`/${choiseBrand}/models`);
       //   const user_id = localStorage.getItem('user');
       {}
        setModelo(response.data);
       // console.log(choiseBrand.data);
       // console.log(response.data);
        //teste = response.data;//setSpots(response.data);
      }
      loadBrands();
      loadTypes();
      loadModels();

      console.log(choiseBrand);
      console.log(type);
      console.log(brand);
      console.log(modelo);
    //  loadModels();
      
      
  },[choiseBrand]);

  console.log(code);
  console.log(purchase);
  console.log(choiseType);
  console.log(choiseModel);
  console.log(choiseBrand);
  
   async function handleSubmit(event){
       event.preventDefault();
      const response = await api.post('/devices',{code,purchase,"type_id":choiseType,"modelo_id":choiseModel,"brand_id":choiseBrand});
  
       history.push('/home');
    }
    return ( 
        <>
          <form onSubmit = {handleSubmit}>
          <label htmlFor="code">Código do Equipamento* </label>
          <input 
              type="text" 
              id="code" 
            placeholder="Código do equipamento"
            value={code}
            onChange={event =>setCode(event.target.value)}
            />


            <label htmlFor="name">Marca* </label>
            <select value={choiseBrand}onChange={event =>setChoiseBrand(event.target.value)}>
                {brand.map((item)=>{return (<option value={item.id}>{item.name}</option>)})}
            </select>

            <label htmlFor="modelo">Modelo* </label>
            <select value={choiseModel}onChange={event =>setChoiseModel(event.target.value)}>
            {modelo.map((item)=>{return (<option value={item.id}>{item.name}</option>)})}  
            </select>  

            <label htmlFor="type">Tipo de Equipamento* </label>
            <select value={choiseType}onChange={event =>setChoiseType(event.target.value)}>
            {type.map((item)=>{return (<option defaultValue="Selecione o Equipamento" value={item.id}>{item.name}</option>)})}
             </select>  
            
          
            <label htmlFor="serie"> Serie* </label>
            <input 
              type="text" 
              id="serie" 
            placeholder="Serie do equipamento"
            value={serie}
            onChange={event =>setSerie(event.target.value)}
            />
             <label htmlFor="purchase">Data da compra* </label>
            <input 
              type="date" 
              id="purchase" 
              value={purchase}
              onChange={event =>setPurchase(event.target.value)}
            />
            <button className= "btn"type="submit">Salvar</button>
    
          </form>
        </>
        
        )

}