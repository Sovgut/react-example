import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import "./App.css"
import LoginPage from "./pages/LoginPage"
import ProtectedPage from "./pages/ProtectedPage"
import HomePage from "./pages/HomePage"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/protected" component={ProtectedPage} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
