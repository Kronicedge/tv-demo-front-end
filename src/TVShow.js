import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TVShow extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        allowDelete: PropTypes.bool,
        selectHandler: PropTypes.func.isRequired,
        deleteHandler: PropTypes.func
    }

    renderDelete = () => {
        return (this.props.allowDelete ? <span><button type='delete' onClick={this.props.deleteHandler}>-</button></span> : null)
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
