import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SiteNav extends Component {
    render = () => {
        return (
            <nav>
                <Link to="/">Manage</Link>
                <Link to="preview">Preview</Link> 
            </nav>
        )
    }
}