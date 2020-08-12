import React, { Component } from 'react'
import NewsRender from './components/NewsRender'
import EventsFinder from './components/EventsFinder'
import Suggestion from './components/Suggestion'
import axios from 'axios'


const baseUrl = 'http://localhost:3003';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    
  }
  componentDidMount() {
    this.getUserEvents()
  }

  getUserEvents() {
    axios.get( baseUrl + '/events')
    .then((response) =>{
      this.setState({
        events: response.data
      })
    })
    .catch(function(error){
      console.log(error)
  })
  }



  render() {
    return (
      <div className='container'>
        <h2>app js</h2>
        {/* <NewsRender /> */}
        {/* <EventsFinder /> */}
        <Suggestion />
      </div>
    )
  }
}

