import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false,
        descripcion: props.datosPeli.overview
    };
    handleshow(){
        this.setState({
            show:!this.state.show
        })
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
          <p>{this.state.show ? this.state.descripcion : ""} </p>
          <p onClick={() => this.handleshow()}>
            {this.state.show ? "Ver menos" : "Ver más"}
          </p>
          <Link
            to={`/detalle/id/${this.props.datosPelicula.id}`}
            className="detalle"
          >
            {" "}
            Ir a Detalle{" "}
          </Link>
        </div>
      </>
    );
  }
}

export default Pelicula
