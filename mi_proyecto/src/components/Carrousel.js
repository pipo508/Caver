import React from "react";
import APA from "./images/APA.png"
import IPA from "./images/IPA.png"
import ROJA from "./images/Roja.png"
import RUBIA from "./images/Rubia.png"
import VINO from "./images/vino1.png"
import NEGRA from "./images/Negra.png"
import "./Carrousel-styles.css"
export const Carrousel = () => {
    return(
      <div id="carouselExample" class="carousel slide background_c">
  <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '0px' }} />
  <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(0, 0, 0, 0)', marginTop: '0px', marginBottom: '0px' }} />
  <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '0px' }} />
  <div class="carousel-inner background-carousel">
    <div class="carousel-item active">
      <div class="inline-content">
        <h1 class="underline-on-hover"><a href="#rubias">Cervezas RUBIAS</a></h1>
        <img class="carousel-image zoom" src={RUBIA} alt="hola"/> 
      </div>
    </div>
    <div class="carousel-item">
      <div class="inline-content">
        <h1 class="underline-on-hover"><a href="#rojas">Cervezas Rojas</a></h1>
        <img class="carousel-image zoom" src={ROJA} alt="..."/>
      </div>
    </div>
    <div class="carousel-item">
      <div class="inline-content">
        <h1 class="underline-on-hover"><a href="#ipas">Cervezas IPAS</a></h1>
        <img class="carousel-image zoom" src={IPA} alt="..."/>
      </div>
    </div>
    <div class="carousel-item">
      <div class="inline-content">
        <h1 class="underline-on-hover"><a href="#vinos">VINOS</a></h1>
        <img class="carousel-image zoom" src={VINO} alt="..."/>
      </div>
    </div>
    <div class="carousel-item">
      <div class="inline-content">
        <h1 class="underline-on-hover"><a href="#negras">Cervezas NEGRAS</a></h1>
        <img class="carousel-image zoom" src={NEGRA} alt="..."/>
      </div>
    </div>
    <div class="carousel-item">
      <div class="inline-content">
        <h1 class="underline-on-hover"><a href="#apas">Cervezas APAS</a></h1>
        <img class="carousel-image zoom" src={APA} alt="..."/>
      </div> 
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '0px' }} />
  <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(0, 0, 0, 0)', marginTop: '0px', marginBottom: '0px' }} />
  <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '50px' }} />
  
</div>




    )
}