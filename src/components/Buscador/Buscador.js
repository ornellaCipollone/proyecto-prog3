import React, { Component } from 'react'
import {Link} from 'react-router-dom';

 class Buscador extends Component {
  
  constructor(props){
    super(props);
    this.state={
        busqueda: ""
    }
  }
  evitarSubmit(event){
    event.preventDefault();
    this.props.history.push(`/resultados/${this.state.busqueda}`)
  }
controlarCambios(event){
    this.setState({busqueda: event.target.value});
}
    render() {
    return (
      <div>
        <form onSubmit={(event)=>this.evitarSubmit(event)}>
            <input type='text' name='buscador' placeholder='Buscar...' onChange={(event)=>this.controlarCambios(event)} value={this.state.busqueda}/>
            <input type='submit' value="Submit"/>
        </form>
      </div>
    )
  }
}
export default Buscador