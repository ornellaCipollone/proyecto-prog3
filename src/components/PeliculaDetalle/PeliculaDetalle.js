import React, { Component } from "react";
import { Link } from "react-router-dom";

class PeliculaDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textoBoton: "Agregar a favoritos"
    };
  }
  componentDidMount(){
    let recuperoStorage = localStorage.getItem('favoritos');

    if (recuperoStorage !== null){
        let favoritos = JSON.parse(recuperoStorage);

        if(favoritos.includes(this.props.detallePeli.id)){
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }

    }

}

agregarYSacarDeFavs(id){ //metodo
    //Guardar un id en un array y luego en localStorage
    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritos');

    if (recuperoStorage !== null){
        favoritos = JSON.parse(recuperoStorage);
    }

    if(favoritos.includes(id)){
        favoritos = favoritos.filter( unId => unId !== id)

        
        this.setState({
            textoBoton : "Agrear a favoritos"
        })

    } else {
      
        favoritos.push(id);

        this.setState({
            textoBoton: "Quitar de favoritos",
            
        })

    }
 } 

  render() {
    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w500${this.props.datosPeli.poster_path}`}
          alt="imagen"
        />
        <div>
          <h4>{this.props.datosPelicula.title}</h4>
          <ul>
                <li><strong className="info">Calificacion:</strong> {this.props.detallePeli.vote_average} </li>
                <li ><strong className="info"> Fecha de estreno: </strong>{this.props.detallePeli.release_date}</li>
                <li ><strong className="info">Generos:</strong> {this.props.generos.join(', ')}</li> 
                <li><strong className="info"> Duracion:</strong> {this.props.detallePeli.runtime}</li>
             </ul>

        </div>
      </>
    );
  }
  let 
}

export default PeliculaDetalle
