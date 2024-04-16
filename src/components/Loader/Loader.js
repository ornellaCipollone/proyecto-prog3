import React, { Component } from "react";
import "./loader.css";

export default class Loader extends Component {
  render() {
    return (
      <section className="loader-container">
        <div className="loader"></div>
        <p className="loading-text">Cargando...</p>
      </section>
    );
  }
}
