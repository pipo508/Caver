import React from "react";
import Imagen from "./images/tostados.webp"
import Imagen_2 from "./images/depositphotos_37524563-stock-photo-black-background-or-luxury-gray.jpg"
import "./Imagenes-styles.css"
import Imagen_1 from "./images/bifelomo.jpg"
import Imagen_3 from "./images/fabrica.jpg"
import Imagen_4 from "./images/hombres.jpg"
export const Imagenes = () => {
    return(
        <div id="rubias" className="row">
  <div className="col">
    <img src={Imagen_3} class="img_1 rounded float-start" alt="..." />
    <h1 class="text-center">Nuestra Fabrica</h1>
  </div>
  <div className="col">
    <img src={Imagen_2} class="img_1 rounded float-end" alt="..." />
    <h1 class="text-center">Nuestra Mision</h1>
  </div>
  <div className="col">
    <img src={Imagen_4} class="img_1 rounded float-end" alt="..." />
    <h1 class="text-center">Nuestra Politica</h1>
  </div>
</div>

    )
}