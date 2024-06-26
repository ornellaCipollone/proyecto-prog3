import React, { Component } from "react";
import Pelicula from "../../components/Pelicula/Pelicula";
import Loader from "../../components/Loader/Loader"
import "./favoritos.css";


class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritas: [],
    };
  }
  componentDidMount() {
    let favs = [];
    let recuperoStoragePeliculas = localStorage.getItem("favoritos");
    if (recuperoStoragePeliculas !== null) {
      let pelisArray = JSON.parse(recuperoStoragePeliculas);
      favs = pelisArray;
      let peliculasLista = [];

      favs.forEach((id) => {
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=b0c989c37b55d3ea4a70eda0aeea1b02`
        )
          .then((response) => response.json())
          .then((favs) => {
            peliculasLista.push(favs);
            this.setState({ favoritas: peliculasLista });
          });
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        {this.state.favoritas.length > 0 ? (
          <section className="contenedor">
            <article className="contenedor-peliculas">
              <h2 className="titulo tituloFavs">
                Selección de películas favoritas
              </h2>
              <div className="galeria">
                {this.state.favoritas.map((peliFav, idx) => (
                  <Pelicula key={peliFav + idx} datosPelicula={peliFav} />
                ))}
              </div>
            </article>
          </section>
        ) : (
          <Loader />
        )}
      </React.Fragment>
    );
  }
}

export default Favoritos;
