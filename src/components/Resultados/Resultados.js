import React, { Component } from "react";

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
        {this.state.resultados.length > 0 ? (
          <section>
            <h2>Resultados de Peliculas</h2>
            <div>
              {this.state.resultados.map((pelicula, idx) => (
               console.log(pelicula)
               // <Pelicula key={peli + idx} datosPelicula={pelicula}/>
              ))}
            </div>
          </section>
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

export default Resultados;
