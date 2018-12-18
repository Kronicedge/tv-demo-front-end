import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './Style.css'
import ManagePage from './ManagePage.js'
import PreviewPage from './PreviewPage'


class App extends Component {

  state = {
    show: '',
    rating: '',
    url: ''
  }

  tvShowDeleted = () => {
    this.setState({
      show: '',
      rating: '',
      url: ''
    })
  }

  saveTVShow = (showToSave) => {
    this.setState({
      show: showToSave.show,
      rating: showToSave.rating,
      url: showToSave.url
    })
  }

  renderManagePage = () => {
    return (<ManagePage show={this.state.show} rating={this.state.rating} url={this.state.url} tvShowDeleted={this.tvShowDeleted} saveShow={this.saveTVShow}></ManagePage>)
  }

  renderPreviewPage = () => {
    return (<PreviewPage show={this.state.show} rating={this.state.rating} url={this.state.url} tvShowDeleted={this.tvShowDeleted}></PreviewPage>)
  }

  render = () => {
    return (
      <Switch>
        <Route exact path='/' component={this.renderManagePage} />
        <Route path='/preview' component={this.renderPreviewPage} />
      </Switch>
    )
  }
}

export default App
