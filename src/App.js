import React, { Component } from 'react'
import NewsRender from './components/NewsRender'
import EventsFinder from './components/EventsFinder'
import Suggestion from './components/Suggestion'
import axios from 'axios'
import SuggestionDisplay from './components/SuggestionDisplay'
import { Switch, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import CurrentLocation from './components/CurrentLocation'
import NewsRenderSec from './components/NewsRenderSec'




let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:3003";
} else {
  baseUrl = "https://eventfinderapi.herokuapp.com";
}


// const baseUrl = 'http://localhost:3003';

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
       
       <Navigation />
        <Switch>
          {/* <Route exact path='/' component={NewsRender}/> */}
          <Route exact path='/' component={NewsRenderSec}/>
          <Route exact path='/eventsfinder' component={EventsFinder} />
          <Route exact path='/suggestion'  component={Suggestion} />
          <Route
           exact path='/display'
           render={() => (<SuggestionDisplay events = {this.state.events} /> )} />
           
        </Switch>
        {/* <CurrentLocation  /> */}
        {/* <NewsRenderSec /> */}
       
      </div>
    )
  }
}

