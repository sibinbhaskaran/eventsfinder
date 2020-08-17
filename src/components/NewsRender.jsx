import React, { Component } from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'

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
            
          <Container>
            <div>
                {
                    this.state.news.map(newsData => {
                        return (
                            <div>
                            <Carousel className="d-inline p-1 bg-dark text-white">
                            <Carousel.Item>
                        
                        <a href= {newsData.url}> <img className="d-block" src={newsData.urlToImage} alt='First slide'/></a>
                        
                        <Carousel.Caption>
                        <h4>{newsData.title}</h4>
                        <p>{newsData.description}</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                        
                        </div>
                        )
                      
                    }) 
                }
             
             </div>
             </Container>
        )
    }
}
// http://newsapi.org/v2/top-headlines?country=us&apiKey=1c6cb1152ebf456980d49ae987535a97