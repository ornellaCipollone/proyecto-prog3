import React, { Component } from "react";

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
      <div>
        <form onSubmit={(event) => this.evitarSubmit(event)}>
          <input
            type="text"
            name="buscador"
            placeholder="Buscar..."
            onChange={(event) => this.capturarValor(event)}
            value={this.state.valorInput}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Buscador;
