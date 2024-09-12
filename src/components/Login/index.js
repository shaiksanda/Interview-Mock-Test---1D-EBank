import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    userId: '',
    pin: '',
    showSubmitError: false,
    errorMsg: '',
  }

  handleUserId = event => {
    this.setState({userId: event.target.value})
  }

  handlePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  handleLogin = async event => {
    event.preventDefault()
    const {userId, pin} = this.state

    const url = 'https://apis.ccbp.in/ebank/login'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_id: userId, pin}),
    }

    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userId, pin, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="image"
            />
          </div>
          <form onSubmit={this.handleLogin} className="form-container">
            <h1 className="login-heading">Welcome Back!</h1>

            <label htmlFor="userId" className="label">
              User ID
            </label>
            <input
              value={userId}
              onChange={this.handleUserId}
              type="text"
              placeholder="Enter User ID"
              className="input"
              id="userId"
            />
            <label htmlFor="pin" className="label">
              PIN
            </label>
            <input
              value={pin}
              onChange={this.handlePin}
              type="password"
              placeholder="Enter PIN"
              className="input"
              id="pin"
            />
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError && (
              <p style={{color: 'red', fontWeight: 'bold'}}>{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
