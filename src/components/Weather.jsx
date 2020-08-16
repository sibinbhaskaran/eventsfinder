import React, { Component } from 'react'
import axios from 'axios'

export default class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: [],
            baseurl: 'https://api.openweathermap.org/data/2.5/weather?lat=',
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            api: '&appid=1de195feaa3dc101f64b510613f16bca',
    
        }
       this.componentDidMount = this.componentDidMount.bind(this)
    }

componentDidMount(){
    this.weatherData()
}

    weatherData (){
    let mainUrl = this.state.baseurl + this.state.latitude + '&lon=' + this.state.longitude + this.state.api
    console.log(mainUrl)
    console.log(this.state.longitude)
axios.get(mainUrl)
.then((response) =>{
    console.log(response)
    this.setState({
        weather: response.data,
    })
}).catch(function(error){
    console.log(error)
    
})
}


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
