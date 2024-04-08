import React, { Component } from 'react'
import Buscador from "../../components/Buscador/Buscador"


class Home extends Component {
  constructor() {
    super()
    this.state = {
      populars: [],
      topRated: [],
    }
  }

  componentDidMount() {
    console.log("props Home", this.props)
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=b0c989c37b55d3ea4a70eda0aeea1b02")
      .then(res => res.json())
      .then(data => this.setState({
        populars: data.results,
      }))
      .catch(error => console.log(`El error fue ${error}`))

    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b0c989c37b55d3ea4a70eda0aeea1b02")
      .then(res => res.json())
      .then(data => this.setState({
        topRated: data.results,
      }))
      .catch(error => console.log(`El error fue ${error}`))
  }


  render() {
    return (
      <div>
        <Buscador
        history={this.props.history}
        />      
      </div>
    )
  }
}
export default Home


