import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './Style.css'
import ManagePage from './ManagePage.js'
import PreviewPage from './PreviewPage.js'
import Pictures from './Pictures'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={ManagePage} />
            <Route path="/preview" component={PreviewPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
