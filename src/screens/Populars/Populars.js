import React, { Component } from "react";

class populars extends Component {
    constructor() {
        super()
        this.state = {
            populars: [],
        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=b0c989c37b55d3ea4a70eda0aeea1b02")

            .then(res => res.json())
            .then(data => this.setState({
                populars: data.results

            }))
            .catch(error => console.log(error))
    }
}
