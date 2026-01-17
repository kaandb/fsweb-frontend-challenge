import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import HireMe from './pages/HireMe'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[#252128] text-slate-900 dark:text-white transition-colors duration-300">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire-me" element={<HireMe />} />
        </Routes>
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
}

export default App;