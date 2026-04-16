import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import BookingModal from './components/ui/BookingModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home openBookingModal={openBookingModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
        <ToastContainer
          position="bottom-right"
          theme="light"
          toastStyle={{
            fontFamily: '"Tahoma", Arial, sans-serif',
            fontSize: '11px',
            borderRadius: 0,
            background: '#d4d0c8',
            border: '2px solid #ffffff',
            borderRight: '2px solid #808080',
            borderBottom: '2px solid #808080',
            color: '#000',
            boxShadow: '1px 1px 0 #000',
          }}
          style={{ bottom: '38px' }}
        />
      </div>
    </Router>
  );
}

export default App;
