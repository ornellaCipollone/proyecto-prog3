import React, {Component} from "react"

class Favoritos extends Component{
    constructor(props){
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
            }

            )
            }
        }
    }
       