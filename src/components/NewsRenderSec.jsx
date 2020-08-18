import React, { Component } from 'react'
import axios from 'axios'

export default class NewsRenderSec extends Component {
    constructor(props){
        super(props)
        this.state = {
            newsSecond: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

componentDidMount() {
    axios({
        "method":"GET",
        "url":"https://newscafapi.p.rapidapi.com/apirapid/news/",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"newscafapi.p.rapidapi.com",
        "x-rapidapi-key":"ce7aa27876msh95e3b3d60656810p16305cjsn985e2e54c52a",
        "useQueryString":true
        },"params":{
        "q":"news"
        }
        })
        .then((response)=>{
          console.log(response)
          this.setState({
              newsSecond:response.data
          })

        })
        .catch((error)=>{
          console.log(error)
        })

}
    render() {
        return (
            <div>
                <div class="news-main">
                {
                    
                    this.state.newsSecond.map(newsData => {
                        // console.log(newsData)
                        return (
                           
                            <div class="news">
                        <a href= {newsData.source_url}> <img class="news-image" src={newsData.img} alt='img'/></a>
                        <h4 class="news-h4">{newsData.title}</h4>
                        {/* <p class="news-p">{newsData.content}</p> */}
                      
                       
                        
                        </div>
                        
                        )
                      
                    }) 
                   
                }
             
             </div>
            </div>
        )
    }
}
