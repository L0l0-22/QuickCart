import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SecNavbar from './components/SecNavbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <SecNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
       <Footer />
    </>
  );
}

export default App;
