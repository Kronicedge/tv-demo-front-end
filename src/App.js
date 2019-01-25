import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './Style.css'
import ManagePage from './ManagePage.js'
import PreviewPage from './PreviewPage'


class App extends Component {

  render = () => {
    return (
      <Switch>
        <Route exact path='/' component={ManagePage} />
        <Route path='/preview' component={PreviewPage} />
      </Switch>
    )
  }
}

export default App
