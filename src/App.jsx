import Checkout from "./components/Checkout"
import Header from "./components/Header"
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </Router>
  )
}

export default App


