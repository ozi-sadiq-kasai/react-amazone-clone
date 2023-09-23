import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <img className="home__Image" src="src/assets/banner 1.jpg" alt="" />
      </div>
      <div className="home__row">
        <Product 
        title="The Lean Startup" price="29.99" 
        image="src/assets/leanstartup.jpg"
        rating={5}
        />
        
      </div>
    </div>
  )
}
export default Home