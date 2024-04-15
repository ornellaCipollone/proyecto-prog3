import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mostrar: false,
        descripcion: props.datosPelicula.overview,
        textoBoton: "Agregar a favoritos"

    };
  }
 
  handleMostrar(){
    this.setState({
        mostrar: !this.state.mostrar
    })
  }

  agregarYSacarDeFavs(id){ //metodo
    //Guardar un id en un array y luego en localStorage
    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritos');

    if (recuperoStorage !== null){
        favoritos = JSON.parse(recuperoStorage);
    }

    if(favoritos.includes(id)){
        favoritos = favoritos.filter( unId => unId !== id)

        
        this.setState({
            textoBoton : "Agrear a favoritos"
        })

    } else {
      
        favoritos.push(id);

        this.setState({
            textoBoton: "Quitar de favoritos",
        })

    }

    let favoritostoString= JSON.stringify(favoritos);
    localStorage.setItem ("favoritos", favoritostoString);
 } 
  render() {
    console.log(this.props);
    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}`}
          alt="imagen"
        />
        <div>
          
          <h4>{this.props.datosPelicula.title}</h4>

          <button onClick={()=> this.agregarYSacarDeFavs(this.props.datosPelicula.id)} type="button" className="boton"> {this.state.textoBoton}  </button>

				<p className="fechas">{this.props.datosUp}</p>
          <p>Fecha de estreno: {this.props.datosPelicula.release_date} </p>
          <button onClick={()=> this.handleMostrar()}> 
            {this.state.mostrar ? 'Ver menos' : 'Ver más'}
          </button>
          <Link to={`/detail/id/${this.props.datosPelicula.id}`}>
            Ir a Detalle
          </Link>
        </div>
      </>
    );
  }
}

export default Pelicula
