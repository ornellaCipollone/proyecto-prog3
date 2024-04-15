import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w500${this.props.datosPeli.poster_path}`}
          alt="imagen"
        />
        <div>
          <p>{this.props.datosPelicula.title}</p>
          <p>{this.props.datosPelicula.release_date} </p>
          <Link to={`/detail/id/${this.props.datosPelicula.id}`}>
            Ir a Detalle
          </Link>
        </div>
      </>
    );
  }
}

export default Pelicula
