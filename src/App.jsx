import Checkout from './components/Checkout'
import Header from './components/Header'
import Home from './components/Home'
import {Login} from './components/Login'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

function App() {
  return (
    <Router>
      {window.location.pathname !== '/login' ? <Header /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App








