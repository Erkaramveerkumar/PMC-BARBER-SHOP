
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutUs from './components/Home/AboutUs';
import Service from './components/Home/Service';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about-us" element={<AboutUs />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
