import React, { Component } from 'react'


import NewsRender from './components/NewsRender'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  render() {
    return (
      <div className='container'>
        <h2>app js</h2>
        <NewsRender />
      </div>
    )
  }
}

