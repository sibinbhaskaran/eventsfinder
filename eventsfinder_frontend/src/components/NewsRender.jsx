import React, { Component } from 'react'
import axios from 'axios'

export default class NewsRender extends Component {
    constructor(props){
        super(props)
        this.state = {
            news: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

componentDidMount() {
    axios.get('http://newsapi.org/v2/top-headlines?country=us&apiKey=1c6cb1152ebf456980d49ae987535a97')
    .then((response) =>{
       this.setState({
           news: response.data.articles
       })
       
       })
       .catch(function(error){
        console.log(error)
    })

}


    render() {
        return (
            <div>
                {
                    this.state.news.map(newsData => {
                        return (
                            <ul>
                        <li>{newsData.title}</li>
                        <a href= {newsData.url}> <img src={newsData.urlToImage} alt='news'/></a>
                        <li>{newsData.description}</li>
                        
                      
                        </ul>
                        )
                    }) 
                }
            </div>
        )
    }
}
// http://newsapi.org/v2/top-headlines?country=us&apiKey=1c6cb1152ebf456980d49ae987535a97