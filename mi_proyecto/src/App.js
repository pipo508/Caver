import React, {Component} from 'react';
import { Navbar } from './components/Navbar';
import { Carrousel } from './components/Carrousel';
import { Imagenes } from './components/Imagenes';
import "./App.css"
export const App = ()=> {
    return (
      <div class="background"> 
        <Navbar/>
      <div>
        <Carrousel />
      </div>
          <Imagenes />
      </div>  
      )
}
export default App