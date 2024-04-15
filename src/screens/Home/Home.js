import React, { Component } from 'react'
import Buscador from "../../components/Buscador/Buscador"
import Pelicula from "../../components/Pelicula/Pelicula"
import {Link} from "react-router-dom"
import "./home.css";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      populars: [],
      topRated: [],
    };
  }

  componentDidMount() {
    console.log("props Home", this.props);
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b0c989c37b55d3ea4a70eda0aeea1b02"
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          populars: data.results,
        })
      )
      .catch((error) => console.log(`El error fue ${error}`));

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b0c989c37b55d3ea4a70eda0aeea1b02"
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          topRated: data.results,
        })
      )
      .catch((error) => console.log(`El error fue ${error}`));
  }

  render() {
    console.log(this.setState.populars);
    console.log(this.setState.topRated);
    return (
      <React.Fragment>
        <Buscador history={this.props.history} />

        {this.state.populars.length > 0 ? (
          <section>
            <h2>
              <Link to="/populars">Populars Movies</Link>
            </h2>
            {this.state.populars.slice(0, 6).map((pelicula, idx) => (
              <Pelicula key={pelicula + idx} datosPelicula={pelicula} />
            ))}
          </section>
        ) : (
          <h3> Loading...</h3>
        )}
        <h2>
          <Link to="/toprated">Top Rated Movies</Link>
        </h2>
        {this.state.topRated.length > 0 ? (
          <section>
            {this.state.topRated.slice(0, 6).map((pelicula, idx) => (
              <Pelicula key={pelicula + idx} datosPelicula={pelicula} />
            ))}
          </section>
        ) : (
          <h3> Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}
export default Home;
