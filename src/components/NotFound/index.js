import Header from '../Header'
import './index.css'

const NotFound = () => {
  console.log('')
  return (
    <div className="bg-container">
      <Header />
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
          alt="not found"
          className="not-found-image"
        />
        <h1 style={{color: 'orangered'}}>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found.</p>
      </div>
    </div>
  )
}

export default NotFound
