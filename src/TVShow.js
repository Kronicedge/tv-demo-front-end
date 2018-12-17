import React, { Component } from 'react'

export default class TVShow extends Component {
    
    renderDelete = () => {
        return (this.allowDelete = true ? <span><button type='delete'>-</button></span> :null)
    }

    render = () => {
        return (
            <div>
                <button>{this.props.name}</button>
                {this.renderDelete()}
            </div>
        )
    }
}
