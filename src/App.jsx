
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Games from './pages/Games';
import Contact from './pages/Contact';
import Cyber from './pages/Cyber';
import Web from './pages/Web';
function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/cyber" element={<Cyber />} />
          <Route path='/web' element={<Web />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
