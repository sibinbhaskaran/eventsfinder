import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from "react-bootstrap/Nav";

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import "../App.css"


export default class NavBar extends Component {
    render() {
        return (
            <Container>
                
            <Nav className="justify-content-center " id="bar" >
            <Nav.Item sticky="top">
            <Nav.Link><Link to='/'><Button variant="secondary">HOME</Button></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link to='/eventsfinder'><Button variant="secondary">FIND EVENTS</Button></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link to='/display'><Button variant="secondary">USER SUGGESTIONS</Button></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link to='/suggestion'><Button variant="secondary">ADD SUGGESTIONS</Button></Link></Nav.Link>
            </Nav.Item>
            </Nav>
            
            </Container>
        )
    }
}
