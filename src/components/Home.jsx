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
          title="The Lean Startup"
          price="29.99"
          image="src/assets/leanstartup.jpg"
          rating={3}
        />
        <Product
          title="Americanah"
          price="39.99"
          image="src/assets/book 1.jpg"
          rating={5}
        />
        <Product
          title="Things Fall Apart"
          price="39.99"
          image="src/assets/book 2.jpg"
          rating={5}
        />
        <Product
          title="Laptop hp"
          price="250.00"
          image="src/assets/laptop 1.jpg"
          rating={4}
        />
        <Product
          title="Laptop Apple"
          price="450.99"
          image="src/assets/Laptop.jpg"
          rating={5}
        />
        <Product
          title="Motar & Pestel"
          price="19.99"
          image="src/assets/motar.jpg"
          rating={2}
        />
        <Product
          title="Television"
          price="300.00"
          image="src/assets/television 1.jpg"
          rating={3}
        />
        <Product
          title="Television"
          price="350.00"
          image="src/assets/television.jpg"
          rating={4}
        />
        <Product
          title="Wok"
          price="50.99"
          image="src/assets/wok.jpg"
          rating={5}
        />
      </div>
    </div>
  )
}
export default Home