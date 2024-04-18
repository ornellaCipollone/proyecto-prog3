import React, { Component } from "react";
import { Link } from "react-router-dom";

class PeliculaDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
 
 render(){
  console.log(this.props)
  return(
      <div className="sub-container">
      <img className="imagen" src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`} alt="no respires"/>
      <div className="letras">
          <h2 className= "titulo">{this.props.titulo}</h2>
          <div className="titulos espacio">FECHA DE ESTRENO</div>
          <div className="espacio estreno">{this.props.fecha}</div>
          <div className="titulos espacio">GÉNERO</div>
           <div className="espacio genero">{this.props.genero.map((gen) => gen.name).join(", ")}</div> 
          <div className="titulos espacio">DURACIÓN</div>
          <div className="espacio duracion">{this.props.duracion}</div>
          <div className="titulos espacio">RATING</div>
          <div className="espacio rate">{this.props.calificacion}</div>
        
          <button className="boton-heart"><i className="icon-heart"></i></button>
      
      </div>
      </div>
  )
}
 
}

export default PeliculaDetalle
