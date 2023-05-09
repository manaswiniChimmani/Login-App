// Write your code here
import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {loggedIn: false}

  onClickBtn = () => {
    this.setState(prevValue => ({loggedIn: !prevValue.loggedIn}))
  }

  render() {
    const {loggedIn} = this.state

    return (
      <div className="container">
        <div className="card">
          <Message loggedIn={loggedIn} />
          {loggedIn ? (
            <Logout logout={this.onClickBtn} />
          ) : (
            <Login login={this.onClickBtn} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
