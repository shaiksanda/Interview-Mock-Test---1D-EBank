import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const {history} = props
  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
      />
      <button onClick={handleLogout} className="logout-button" type="button">
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
