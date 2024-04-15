import React, {Component} from "react";
import "./tarjetadetalle.css";
class TarjetaDetalle extends Component{
    constructor(props){
        super(props)
        this.state={
            textoBoton: "Agregar a Favoritos",
        }
    }
    componentDidMount(){
        //Chequear si el id está en el array de favoritos
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            let favoritos = JSON.parse(recuperoStorage);
    
            //si está el id, cambiar el texto del botón
            if(favoritos.includes(this.props.detallePeli.id)){
                this.setState({
                    textoBoton: "Quitar de favoritos"
                })
            }

        }
    }
    //Si el id está en el array debe sacarlo.
    //Si el id NO ESTÁ en el array debe agregarlo.
    
    agergarYSacarDeFavs(id){ //metodo
        //Guardar un id en un array y luego en localStorage
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage);
        }

        if(favoritos.includes(id)){
            //Si el id está en el array. ¿Qué tenemos que hacer?
            //Sacarlo del array.
            favoritos = favoritos.filter( unId => unId !== id)

            //Mostrarle un cambio al usuario en la pantalla.
            this.setState({
                textoBoton : "Agrear a favoritos"
            })

        } else {
            //Si el id NO ESTÁ en el array. ¿Qué tenemos que hacer?
            favoritos.push(id);
    
            this.setState({
                textoBoton: "Quitar de favoritos",
                
            })

        }

        //Guardar en localStorage
        let favoritosToString = JSON.stringify(favoritos);        
        localStorage.setItem('favoritos', favoritosToString);

    }
    render(){
        console.log(this.props)
        return(
            <React.Fragment> 
            <img className="fotoparasite" src={`https://image.tmdb.org/t/p/w500${this.props.detallePeli.poster_path}`} alt="foto"/>
            <div className="parasiteinfo">
            <h1 className="tituloparasite">{this.props.detallePeli.title}</h1>
            <div><p className="sinopsis">{this.props.detallePeli.overview}</p></div>
            <ul>
                <li > className="info" Fecha de estreno: {this.props.detallePeli.release_date}</li>
                <li ><strong className="info">Generos:</strong> {this.props.generos.join(', ')}</li> 
                <li><strong className="info"> Duracion:</strong> {this.props.detallePeli.runtime}</li>
             </ul>
             <button className="botonfav" onClick={()=>this.agergarYSacarDeFavs(this.props.detallePeli.id)} type="button">
                {/* <img src="/img/white-star-icon-13.png" className="estrella" alt=""/> */} {this.state.textoBoton}

             </button> 
            </div>
            </React.Fragment>)   
    }

}
export default TarjetaDetalle;