import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TVShow extends Component {

  static PropTypes = {
    requiredname: PropTypes.string,
    optionalallowDelete: PropTypes.boolean,
    requiredselectHandler: PropTypes.function,
    optiondeleteHandler: PropTypes.function
  }
  renderDelete = () => {
      if (this.props.allowDelete === true) {
        return (
          <button onClick={this.props.deleteHandler}>-</button>
        )
      }
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

export default TVShow