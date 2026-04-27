import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar, Footer } from '../components'
import { Home, Shop, About, Contact, Login, Signup, Profile } from '../pages'

const PrivateRoute = ({ element }) => {
  return sessionStorage.getItem('user') ? element : <Navigate to="/login" replace />
}

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/shop" element={<PrivateRoute element={<Shop />} />} />
    <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
    <Route
      path="*"
      element={
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      }
    />
  </Routes>
)

export default AppRoutes
