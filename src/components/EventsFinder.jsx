import React, { Component } from 'react'
import axios from 'axios'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class EventsFinder extends Component {
    constructor(props){
        super(props)
        this.state = {
            eventArray: [],
            baseURL: 'https://app.ticketmaster.com/discovery/v2/events',
            key: '?apikey=FdwwSkhy3hgj1XfZtPoA9vCLgCMWdbys&locale=*&city=',
            city: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.searchEvents = this.searchEvents.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })

    }

searchEvents(event) {
    event.preventDefault()
    this.setState({
        url: this.state.baseURL + this.state.key + this.state.city
    }, () => {
        axios.get(this.state.url)
        .then(response => {
            return response
        }).then(data => this.setState({
            eventArray: data.data._embedded.events,
        }))
        .catch(function(error){
            console.log(error)
        })
    })
    

}

    render() {
        return (
            <Container>
            <div>
            <Form onSubmit={ (evt) => this.searchEvents(evt) }>
                {/* <label htmlFor="city">Enter city  </label> */}
                <Form.Group id="eventsfinder">
                <Form.Control
                 type="text" id="city"
                    onChange={ (evt) => this.handleChange(evt) }
                    value={ this.state.city }/>
                    
                <Button type="submit" variant="secondary" id="btn">Search Events</Button>
                
                </Form.Group>
                </Form>
            
             <div> 
                {
                    this.state.eventArray.map(eventData => {
                        return (
                            <ul key={eventData.id}>
                                <li>{eventData.name}</li>
                                <a href= {eventData.url}><img src={eventData.images[1].url} alt='pics'/></a> 
                                <li>{eventData.dates.start.localDate}</li>
                        <li>Venue:{eventData._embedded.venues[0].name}</li>
                        <li>Address:{eventData._embedded.venues[0].address.line1}</li>
                        <li>{eventData._embedded.venues[0].address.line2}</li>
                        <li>{eventData._embedded.venues[0].postalCode}</li>

                                
                               
                            </ul>

                        )
                    })
                }
            </div>
           

            </div>
            </Container> 
        )
    }
}
//https://app.ticketmaster.com/discovery/v2/events?apikey=FdwwSkhy3hgj1XfZtPoA9vCLgCMWdbys&locale=*&city=houston'