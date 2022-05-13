
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Home/About/About';
import Appointment from './Components/Appointment/Appointment';
import Contact from './Components/Contact/Contact';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Review from './Components/Review/Review';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/review' element={<Review/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/appointment' element={<Appointment/>} />

      </Routes>
      
    </div>
  );
}

export default App;
