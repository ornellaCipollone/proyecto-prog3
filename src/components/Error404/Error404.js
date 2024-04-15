import React, { Component } from "react";

class Error404 extends Component {
  render() {
    return (
      <div>
        <div className="not-found-container">
          <h1 className="not-found-title">404</h1>
          <p className="not-found-message">Oops! Parece que te has perdido.</p>
          <div className="animated-background"></div>
          <Link to="/" className="not-found-link">
            Volver a la página de inicio
          </Link>
        </div>
      </div>
    );
  }
}

export default Error404;
