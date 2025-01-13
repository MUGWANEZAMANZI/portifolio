
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Games from './pages/Games';
import Contact from './pages/Contact';
import Cyber from './pages/Cyber';
function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cyber" element={<Cyber />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
