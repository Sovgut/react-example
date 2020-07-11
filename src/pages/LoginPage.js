import React, { Component } from "react"
import Layout from "../hoc/Layout"
import axios from "axios"

class LoginPage extends Component {
  state = {
    email: String(),
    password: String(),
  }

  onUserFormSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:3030/auth/login",
        this.state
      )
      if (response.data && response.data?.success) {
        localStorage.setItem("access_token", response.data.content)
        return this.props.history.push("/protected")
      }

      throw new Error("Some error")
    } catch (error) {
      console.log(error.message)
    }
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.type]: e.target.value,
    })
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.onUserFormSubmit}>
          <input
            type="email"
            defaultValue={this.state.email}
            placeholder="email"
          />
          <input
            type="password"
            defaultValue={this.state.password}
            placeholder="password"
          />
          <button type="submit">Login</button>
        </form>
      </Layout>
    )
  }
}

export default LoginPage
