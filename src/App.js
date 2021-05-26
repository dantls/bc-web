import React from 'react';

import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/CustomNavBar'; 

import './App.css';

function App() {
  return (
    <div classname="container"> 
      <NavBar ClassName="isLogin"/> 
      <div className="content">    
       <Routes /> 
      </div>  
   </div>
  );
}

export default App;
