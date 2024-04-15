import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mostrar: false,
        descripcion: props.datosPelicula.overview
    };
  }

  handleMostrar(){
    this.setState({
        mostrar: !this.state.mostrar
    })
  }

  render() {
    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}`}
          alt="imagen"
        />
        <div>
          <h4>{this.props.datosPelicula.title}</h4>
          <p>{this.props.datosPelicula.release_date} </p>
          <button onClick={()=> this.handleMostrar()}> 
            {this.state.mostrar? 'Ver menos' : 'Ver más'}
          </button>
          <Link to={`/detail/id/${this.props.datosPelicula.id}`}>
            Ir a Detalle
          </Link>
        </div>
      </>
    );
  }
}

export default Pelicula;
