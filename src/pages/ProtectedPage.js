import React, { Component } from "react"
import Layout from "../hoc/Layout"

class ProtectedPage extends Component {
  componentDidMount() {
    if (!localStorage.access_token) {
      this.props.history.replace("/login")
    }
  }

  render() {
    return (
      <Layout>
        <div>Protected page</div>
      </Layout>
    )
  }
}

export default ProtectedPage
