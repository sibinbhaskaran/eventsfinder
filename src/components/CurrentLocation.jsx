import React, { Component } from 'react'
import Weather from './Weather'

const geolocation = require('geolocation')






export default class CurrentLocation extends Component {
constructor(props) {
    super(props)
    this.state = {
        // weather: [],
        // baseurl: 'https://api.openweathermap.org/data/2.5/weather?lat=',
        latitude: '',
        longitude: '',
        // api: '&appid=1de195feaa3dc101f64b510613f16bca',

    }
   this.componentDidMount =  this.componentDidMount.bind(this) 
    // this.weatherData = this.weatherData.bind(this)
    // this.componentWillMount = this.componentWillMount.bind(this)
}



componentDidMount(){
    this.position()
    // this.weatherData()
}
// componentWillMount(){
//     this.weatherData()
// }

position () {
    navigator.geolocation.getCurrentPosition(

    position => this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }), 
        error => console.log(error)
    )

}



// weatherData (){
//     let mainUrl = this.state.baseurl + this.state.latitude + '&lon=' + this.state.longitude + this.state.api
//     console.log(mainUrl)
//     console.log(this.state.longitude)
// axios.get(mainUrl)
// .then((response) =>{
//     console.log(response)
//     this.setState({
//         weather: response.data
//     })
// }).catch(function(error){
//     console.log(error)
    
// })
// }







    render() {
       
        return (
            <div>
                {/* <h1>{this.state.latitude}</h1> */}
                {/* <h1>{this.state.longitude}</h1> */}
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
