import React, { Component } from 'react'
import Weather from './Weather'

const geolocation = require('geolocation')






export default class CurrentLocation extends Component {
constructor(props) {
    super(props)
    this.state = {
        
        latitude: '',
        longitude: '',
        

    }
   this.componentDidMount =  this.componentDidMount.bind(this) 
    
}



componentDidMount(){
    this.position()
    
}


position () {
    navigator.geolocation.getCurrentPosition(

    position => this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }), 
        error => console.log(error)
    )

}











    render() {
       
        return (
            <div>
                
                {
                this.state.longitude ?
                <Weather latitude = {this.state.latitude} longitude = {this.state.longitude} />
                : null
    }
            </div>
        )
    }
}

 
// api.openweathermap.org/data/2.5/weather?lat=29.7604&lon=95.3698&appid=1de195feaa3dc101f64b510613f16bca
