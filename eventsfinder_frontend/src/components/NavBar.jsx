import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Link to='/'>HOME</Link>
                <Link to='/eventsfinder'>FIND EVENTS</Link>
                <Link to='/display'>USERS SUGGESTIONS</Link>
                <Link to='/sugesstion'>ADD SUGGESTIONS</Link>
            </div>
        )
    }
}
