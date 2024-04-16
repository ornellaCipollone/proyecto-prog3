import React, { Component } from "react";
import "./buscador.css"

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: "",
    };
  }
  evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/resultados/${this.state.valorInput}`);
  }
  capturarValor(event) {
    this.setState({ valorInput: event.target.value });
  }
  render() {
    return (
      <div className="buscador-container">
        <form className="buscador-form" onSubmit={(event) => this.evitarSubmit(event)}>
          <input
            className="buscador-input"
            type="text"
            name="buscador"
            placeholder="Buscar película..."
            onChange={(event) => this.capturarValor(event)}
            value={this.state.valorInput}
          />
          <input className="buscador-submit" type="submit" value="Buscar" />
        </form>
      </div>
    );
  }
}
export default Buscador;
