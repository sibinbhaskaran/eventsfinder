import React, { Component } from 'react'
import axios from 'axios'

export default class EventsFinder extends Component {
    constructor(props){
        super(props)
        this.state = {
            eventArray: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        axios.get('https://app.ticketmaster.com/discovery/v2/events?apikey=FdwwSkhy3hgj1XfZtPoA9vCLgCMWdbys&locale=*&city=houston')
        .then((response) =>{
           this.setState({
            //    eventArray: response.data._embedded.events
           })
           
           })
           .catch(function(error){
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
