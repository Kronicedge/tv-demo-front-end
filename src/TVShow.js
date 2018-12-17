import React, { Component } from 'react'

export default class TVShow extends Component {
    
    renderDelete = () => {
        return (this.allowDelete = true ? <span><button type='delete' onClick={this.props.deleteHandler}>-</button></span> :null)
    }

    render = () => {
        return (
            <div>
                <button onClick={this.props.selectHandler}>{this.props.name}</button>
                {this.renderDelete()}
            </div>
        )
    }
}
