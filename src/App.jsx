import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AudioProvider } from '@/context/AudioContext';
import Layout from '@/components/layout/Layout';
import { Toaster } from 'react-hot-toast';

import Home from '@/pages/Home';
import Booking from '@/pages/Booking';

import ScrollToTop from '@/components/layout/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AudioProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="booking" element={<Booking />} />
          </Route>
        </Routes>
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </AudioProvider>
    </Router>
  );
}

export default App;
