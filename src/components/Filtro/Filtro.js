import React, { Component } from 'react'
import "./filtro.css"

class Filtro extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
        };
      }
      evitarSubmit(event) {
        event.preventDefault();
        this.props.filtrarPelis(this.state.valorInput)
      }
      capturarValor(event) {
        this.setState(
            { valorInput: event.target.value }
        
        );
      }
      render() {
        return (
          <div className="filtro-container">
            <form className="filtro-form" onSubmit={(event) => this.evitarSubmit(event)}>
              <input
                type="text"
                name="filtro"
                placeholder="Buscar película..."
                className="filtro-input"
                onChange={(event) => this.capturarValor(event)}
                value={this.state.valorInput}
              />
              <button type="submit" className="filtro-btn">Filtrar</button>
            </form>
          </div>
        );
      }
}

export default Filtro