import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Home, Shop, About, Contact, Login } from './pages'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div className="app">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
