import React, { Component } from 'react'
import moment from 'moment';

export default class SuggestionDisplay extends Component {
    render() {
        return (
            
            <div>
                {
                    this.props.events.map( eventsData =>{
                        return (
                            
                            <ul>
                                <li>Description:{eventsData.description}</li>
                                <li>Location:{eventsData.location}</li>
                                <li>{eventsData.image}</li>
                                <li>Posted Date:{moment(eventsData.date).format('MM/DD/YYYY')}</li>
                             
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}
