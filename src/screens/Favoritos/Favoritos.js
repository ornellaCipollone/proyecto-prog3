import React, {Component} from "react"

class Favoritos extends Component{
    /* constructor(props){
        super(props);
        this.state = {
            favoritas: []
        }
        }
        componentDidMount(){
            let favs = [];
            let recuperoStoragePeliculas = localStorage.getItem("favoritos")
            if (recuperoStoragePeliculas !== null){
                let pelisArray= JSON.parse(recuperoStoragePeliculas)
                favs= pelisArray 
                peliculasLista = []

            favs.forEach((id) => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b0c989c37b55d3ea4a70eda0aeea1b02`)
                .then(response => response.json())
                .then(favs => { peliculasLista.push(favs);
                    this.setState({favoritas:pelisLista})
                })
            })

            }
        }
     */    render(){
            console.log(this.state);
            return(
                <React.Fragment>
                {/* {
                    this.state.favoritas.length > 0 ?
                <section className="contenedor">
                    <button role="boton" id="flecha-derecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
                    <article className="contenedor-peliculas">
                    <h2 className="titulo tituloFavs">Selección de películas favoritas</h2>
                        <div className="galeria">{
                            this.state.favoritas.map(
                                (peliFav, idx) => <Pelis key={peliFav + idx} datosPop={peliFav}/>
                            )
                        }
                        </div>
                    </article>
                    <button role="boton" id="flecha-derecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
                </section>: 
                <h3 className="loading">Loading...</h3>}
         */}
                </React.Fragment>
            )}
    }
       
    export default Favoritos