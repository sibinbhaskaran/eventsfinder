import React, { Component } from 'react'
import moment from 'moment';

export default class SuggestionDisplay extends Component {
    render() {
        const sortedData = this.props.events.sort((a,b)=> moment(b.date) - moment(a.date))
        console.log(sortedData)
        return (
            
            <div>
                {
                    // this.props.events.map( eventsData =>{
                        sortedData.map(eventsData =>{
                        return (
                            
                            <ul key={eventsData._id}>
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
