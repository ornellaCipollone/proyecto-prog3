import React, { Component } from 'react'

class Filtro extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
        };
      }
      evitarSubmit(event) {
        event.preventDefault();
      }
      capturarValor(event) {
        this.setState(
            { valorInput: event.target.value },
            ()=> this.props.filtrarPelis(this.state.valorInput)
        
        );
      }
      render() {
        return (
          <div>
            <form onSubmit={(event) => this.evitarSubmit(event)}>
              <input
                type="text"
                name="filtro"
                placeholder="Buscar película..."
                onChange={(event) => this.capturarValor(event)}
                value={this.state.valorInput}
              />
            </form>
          </div>
        );
      }
}

export default Filtro