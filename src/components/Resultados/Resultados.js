import React, { Component } from "react";
import Pelicula from "../../components/Pelicula/Pelicula";
import Loader from "../../components/Loader/Loader";
import "./resultados.css";

class Resultados extends Component {
  constructor() {
    super();
    this.state = {
      resultados: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.busqueda}&api_key=b0c989c37b55d3ea4a70eda0aeea1b02`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          resultados: data.results,
        })
      )
      .catch((error) => console.log(`El error fue ${error}`));
  }
  render() {
    return (
      <React.Fragment>
        <h2>Resultados de Peliculas</h2>
        <div className="resultados-container">
          {this.state.resultados.length > 0 ? (
            this.state.resultados.map((pelicula, idx) => (
              <Pelicula key={pelicula + idx} datosPelicula={pelicula} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Resultados;
