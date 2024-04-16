import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./pelicula.css";

class Pelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar: false,
      descripcion: this.props.datosPelicula.overview,
      textoBoton: "Agregar a favoritos",
    };
    console.log(this.props);
  }

  handleMostrar() {
    this.setState({
      mostrar: !this.state.mostrar,
    });
  }

  agregarYSacarDeFavs(id) {
    let favoritos = [];
    let recuperoStorage = localStorage.getItem("favoritos");

    if (recuperoStorage !== null) {
      favoritos = JSON.parse(recuperoStorage);
    }

    if (favoritos.includes(id)) {
      favoritos = favoritos.filter((unId) => unId !== id);

      this.setState({
        textoBoton: "Agregar a favoritos",
      });
    } else {
      favoritos.push(id);

      this.setState({
        textoBoton: "Quitar de favoritos",
      });
    }

    let favoritostoString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favoritostoString);
  }

  render() {
    console.log(this.props);
    return (
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}`}
          alt="imagen"
        />
        <div className="movie-info">
          
          <h4 className="movie-title">{this.props.datosPelicula.title}</h4>
          
          <button
            onClick={() =>
              this.agregarYSacarDeFavs(this.props.datosPelicula.id)
            }
            type="button"
            className="fav-btn"
          >
            {this.state.textoBoton}
          </button>

          <p className="movie-overview">
            {this.state.mostrar ? this.state.descripcion : ""}{" "}
          </p>
          
          <button className="ver-mas-btn" onClick={() => this.handleMostrar()}>
            {this.state.mostrar ? "Ver menos" : "Ver más"}
          </button>
          
            <Link
              to={`/detail/id/${this.props.datosPelicula.id}`}
              className="link-detalle"
            >
              Ir a Detalle
            </Link>
          
        </div>
      </div>
    );
  }
}

export default Pelicula;
