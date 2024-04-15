import React, {Component} from 'react';



class Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            detallePeli:[], //aparecer movies
            generos:[]
        }
    }
    componentDidMount(){
        //Buscamos datos
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e`)
            .then( res => res.json())
            .then( data => this.setState({
                detallePeli: data,
                generos: data.genres.map(genre => genre.name) // Mapea para obtener solo los nombres

            }))
            .catch( error => console.log(error))
    }

    render(){ 
        console.log(this.state.generos)   
        return(
            <React.Fragment>
        
            <section className='infopelicula'>
                <TarjetaDetalle detallePeli={this.state.detallePeli} generos={this.state.generos}/>
            </section>
             </React.Fragment>
        )
    }
}
export default Detail
