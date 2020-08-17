import React, { Component } from 'react'
import axios from 'axios'

export default class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            climate: [],
            baseurl: 'https://api.openweathermap.org/data/2.5/weather?lat=',
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            api: '&appid=1de195feaa3dc101f64b510613f16bca&units=imperial',
    
        }
       this.componentDidMount = this.componentDidMount.bind(this)
    }

componentDidMount(){
    this.weatherData()
}

    weatherData (){
    let mainUrl = this.state.baseurl + this.state.latitude + '&lon=' + this.state.longitude + this.state.api
    console.log(mainUrl)
    // console.log(this.state.longitude)
axios.get(mainUrl)
.then((response) =>{
    console.log(response)
    this.setState({
        climate: response.data,
        temp:response.data.main.temp,
        feels: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        desc: response.data.weather[0].description,
        location: response.data.name,
        code: response.data.sys.country,
    })
}).catch(function(error){
    console.log(error)
    
})
}


    render() {
        return (
            <div>
                <ul>
                    <li>Temp:{this.state.temp}°F</li>
                   
                    <li>Feels like:{this.state.feels}°F</li>
                    <li>Humidity:{this.state.humidity}%</li>
                    <li>weather:{this.state.desc}</li>
                    <li>Location:{this.state.location}, {this.state.code}</li>

                   
                </ul>
                
            </div>
        )
    }
}
