import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SiteNav extends Component {
    render = () => {
        return (
            <nav className='menu'>
                <Link to={"/"}>Manage</Link>
                <Link to={"preview"}>Preview</Link>
            </nav>
        )
    }
}

export default SiteNav