import React, { Component } from 'react'
import SuggestionDisplay from './SuggestionDisplay';
import { Redirect} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const axios = require('axios')


// const baseUrl = 'http://localhost:3003';
let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:3003";
} else {
  baseUrl = "https://eventfinderapi.herokuapp.com";
}

export default class Suggestion extends Component {
    constructor(props){
        super(props)
        this.state = {
            events:[],
            location: '',
            description: '',
            image: '',
            user_name: '',
            redirect: null,
        }
        this.handleChange = this.handleChange.bind(this)
        this.suggestionSubmit = this.suggestionSubmit.bind(this)
        
    }

    handleChange (event) {
        this.setState({
            [event.currentTarget.id]:event.target.value
        })
    }
   
   



suggestionSubmit(event) {
    event.preventDefault();
   axios.post(baseUrl + '/events', {
    location: this.state.location,
    description: this.state.description,
    image: this.state.image,
    user_name:this.state.user_name,

   }).then(function (response) {
       console.log(response);
       
   }).then( ()=>{
       
       this.setState({
        location: '',
        description: '',
        image: '',
        user_name: '',
        redirect: '/display'
       })
   })
.catch(function (error) {
       console.log(error);
   })
   
}







    render() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <Container>
            <div>
                <Form onSubmit = {(event) => this.suggestionSubmit(event)}>
                <Form.Group id="suggestion">
                <Form.Label>Description</Form.Label>
                    <Form.Control
                    type='text' value={this.state.description} onChange={this.handleChange} id='description' placeholder='enter description'/> <br/>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type='text' value={this.state.location} onChange={this.handleChange} id='location' placeholder='enter location details'/> <br/>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type='text' value={this.state.image} onChange={this.handleChange} id='image' placeholder='upload image' /> <br/>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type='text' value={this.state.user_name} onChange={this.handleChange} id='user_name' placeholder='enter your name'/> <br/>
                    <Button type='submit' variant="secondary" id="suggestion-btn" >
                        Click To Add</Button>
                        </Form.Group>
                </Form>
            </div>
            </Container> 
        )
    }
}
