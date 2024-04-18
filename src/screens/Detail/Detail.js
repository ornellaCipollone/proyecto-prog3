import React, {Component} from 'react'
import PeliculaDetalle from '../../components/PeliculaDetalle/PeliculaDetalle'

class Detail extends Component {
    constructor(){
        super()
        this.state=
        { peliRandom: undefined}
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=75196a6b12119e0621f7373e3de1a94a`)
        .then(res => res.json())
        .then(data => this.setState({
            peliRandom: data,
        }))
        .catch()
    }
    render(){
        return(
        <React.Fragment>
             {
            this.state.peliRandom !== undefined ?
       <section className="info">
        <h1 className="titulo"></h1>
        <article className="bloque">
            {
                <PeliculaDetalle poster_path={this.state.peliRandom.poster_path} titulo={this.state.peliRandom.original_title} fecha={this.state.peliRandom.release_date} genero={this.state.peliRandom.genres === undefined ?[]: this.state.peliRandom.genres} duracion={this.state.peliRandom.runtime + " Minutos"} calificacion={this.state.peliRandom.vote_average} />
            }
           

        </article>
    </section>: 
    <h3 className="loading">Loading...</h3>}

        </React.Fragment>
        )
    }
}

export default Detail