import React, { Component } from "react";
import Filtro from "../../components/Filtro/Filtro";
import Pelicula from "../../components/Pelicula/Pelicula";
import Loader from "../../components/Loader/Loader";
import "./populars.css"

class Populars extends Component {
  constructor() {
    super();
    this.state = {
      populars: [],
      page: 1,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b0c989c37b55d3ea4a70eda0aeea1b02&page=${this.state.page}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          populars: data.results,
          page: this.state.page + 1,
        })
      )
      .catch((error) => console.log(`El error fue ${error}`));
  }

  filtrarPopulars(filtro) {
    let peliculasFiltradas = this.state.populars.filter((pelicula) =>
      pelicula.title.includes(filtro)
    );
    this.setState({
      populars: peliculasFiltradas,
    });
  }

  traerMas() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b0c989c37b55d3ea4a70eda0aeea1b02&page=${this.state.page}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          populars: this.state.populars.concat(data.results),
          page: this.state.page + 1,
        })
      )
      .catch((error) => console.log(`El error fue ${error}`));
  }

  render() {
    return (
      <React.Fragment>
        <Filtro
          filtrarPelis={(valorInput) => this.filtrarPopulars(valorInput)}
        />
        <div className="populars-container">
          {this.state.populars.length > 0 ? (
            this.state.populars.map((pelicula, idx) => (
              <Pelicula key={pelicula + idx} datosPelicula={pelicula} />
            ))
          ) : (
            <Loader />
          )}
        </div>
        <button className="ver-mas-btn" onClick={() => this.traerMas(this.state.populars)}>
          Ver más
        </button>
      </React.Fragment>
    );
  }
}

export default Populars;
