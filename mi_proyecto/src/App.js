import React, {Component} from 'react';
import { Navbar } from './components/Navbar';
import { Carrousel } from './components/Carrousel';
import { Imagenes } from './components/Imagenes';
import "./App.css"
import { Alert } from './components/Alert';
export const App = ()=> {
    return (
      <div class="background"> 
        <Navbar/>
        <hr></hr>
        <div>
          <Carrousel />
        </div>
        <hr></hr>
        <div>
          <Imagenes />
        
          <Alert 
            color="alert alert-primary"
            texto="hola me llamo jesu"
          />
        </div>
      </div>  
      )
}
export default App