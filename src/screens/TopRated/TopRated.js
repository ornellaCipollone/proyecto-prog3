import React, { Component } from "react";
import Filtro from "../../components/Filtro/Filtro";
import Pelicula from "../../components/Pelicula/Pelicula"
import Loader from "../../components/Loader/Loader"

class TopRated extends Component {
  constructor() {
    super();
    this.state = {
      topRated: [],
      page: 1,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=b0c989c37b55d3ea4a70eda0aeea1b02&page=${this.state.page}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          topRated: data.results,
          page: this.state.page + 1,
        })
      )
      .catch((error) => console.log(`El error fue ${error}`));
  }

  filtrarTopRated(filtro) {
    let peliculasFiltradas = this.state.topRated.filter((pelicula) =>
      pelicula.title.includes(filtro)
    );
    this.setState({
      topRated: peliculasFiltradas,
    });
  }

  traerMas() {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=b0c989c37b55d3ea4a70eda0aeea1b02&page=${this.state.page}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          topRated: this.state.topRated.concat(data.results),
          page: this.state.page + 1,
        })
      )
      .catch((error) => console.log(`El error fue ${error}`));
  }

  render() {
    return (
      <React.Fragment>
        <Filtro
          filtrarPelis={(valorInput) => this.filtrarTopRated(valorInput)}
        />
        {this.state.topRated.length > 0 ? (
          this.state.topRated.map((pelicula, idx) => (
            <Pelicula key={pelicula + idx} datosPelicula={pelicula} />
          ))
        ) : (
          <Loader/>
        )}
        <button onClick={() => this.traerMas(this.state.topRated)}>
          Ver más
        </button>
      </React.Fragment>
    );
  }
}

export default TopRated;
