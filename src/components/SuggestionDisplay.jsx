import React, { Component } from 'react'
import moment from 'moment';
export default class SuggestionDisplay extends Component {
    render() {
        const sortedData = this.props.events.sort((a,b)=> moment(b.date) - moment(a.date)) //to show the latest post first
        console.log(sortedData)
        return (
            
            <div class="display">
                {
                    // this.props.events.map( eventsData =>{
                        sortedData.map(eventsData =>{
                        return (
                            
                            <ul class="suggestionDisplay" key={eventsData._id}>
                                <li class="suggestion-desc">{eventsData.description}</li>
                                
                                <li><img class="events-image " src={eventsData.image} alt="eventsimage" /></li>
                                <li>Location:{eventsData.location}</li>
                                <li>Posted by:{eventsData.user_name}</li>
                                <li>Posted Date:{moment(eventsData.date).format('MM/DD/YYYY')}</li>
                             
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}
