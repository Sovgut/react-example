import React, { Component } from "react"
import styles from "./Layout.module.css"
import { Link, withRouter } from "react-router-dom"

class Layout extends Component {
  _userLogout = () => {
    localStorage.removeItem("access_token")
    this.props.history.replace("/")
  }

  _renderLoginOrLogout = () => {
    if (localStorage.access_token) {
      return (
        <li onClick={this._userLogout} className={styles.link}>
          <span>Logout</span>
        </li>
      )
    }

    return (
      <li className={styles.link}>
        <Link to="/login">Login</Link>
      </li>
    )
  }

  render() {
    return (
      <div className={styles.layout}>
        <header className={styles.header}>
          <ul className={styles["header-list"]}>
            {this._renderLoginOrLogout()}
            <li className={styles.link}>
              <Link to="/protected">Protected</Link>
            </li>
            <li className={styles.link}>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </header>
        <div className={styles.content}>{this.props.children}</div>
      </div>
    )
  }
}

export default withRouter(Layout)
