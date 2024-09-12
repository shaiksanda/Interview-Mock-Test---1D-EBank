import Header from '../Header'
import './index.css'

const Home = () => {
  console.log('Home')
  return (
    <div className="bg-container">
      <Header />
      <div className="home-container">
        <h1 className="heading">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="card"
        />
      </div>
    </div>
  )
}

export default Home
