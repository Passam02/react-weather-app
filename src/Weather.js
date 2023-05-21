import React, { Component } from 'react'
import {getCountry, getState} from './Location'

class Weather extends Component {
    state = {
        Country: null,
        City: null
    }
    componentDidMount() {
        var country = getCountry()
        var city = getState()
        this.setState({Country: country})
        this.setState({City: city})
        var latitude = ''
        var longitude = ''
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
            });
          } else {
            console.log("Geolocation is not supported by this browser.");
        }
        setTimeout(() => {
            this.setState({Latitude: latitude, Longitude: longitude})
        }, 100);
        

    }
    render() {
        console.log(this.state)
        return(
            <div>
            <h1>{this.state.Country}</h1>
            <h1>{this.state.City}</h1>
            </div>
        )
    }
}

export default Weather