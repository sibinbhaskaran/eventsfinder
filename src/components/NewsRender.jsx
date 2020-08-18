import React, { Component } from 'react'
import axios from 'axios'
// import Carousel from 'react-bootstrap/Carousel'
// import { Container } from 'react-bootstrap'
import {Carousel}  from 'react-bootstrap';

let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:3003";
} else {
  baseUrl = "https://eventfinderapi.herokuapp.com";
}

export default class NewsRender extends Component {
    constructor(props){
        super(props)
        this.state = {
            news: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1c6cb1152ebf456980d49ae987535a97')
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
          
            <div class="news-main">
                {
                    
                    this.state.news.map(newsData => {
                        // console.log(newsData)
                        return (
                           
                            <div class="news">
                        <a href= {newsData.url}> <img class="news-image" src={newsData.urlToImage} alt='img'/></a>
                        <h4 class="news-h4">{newsData.title}</h4>
                        <p class="news-p">{newsData.description}</p>
                      
                       
                        
                        </div>
                        
                        )
                      
                    }) 
                   
                }
             
             </div>
            
        )
    }
}
// https://newsapi.org/v2/top-headlines?country=us&apiKey=1c6cb1152ebf456980d49ae987535a97