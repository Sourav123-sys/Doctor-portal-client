
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Home/About/About';
import Appointment from './Components/Appointment/Appointment';
import Contact from './Components/Contact/Contact';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Review from './Components/Review/Review';
import NMotFound from './Components/NotFound/NMotFound';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth'
import Profile from './Components/Profile/Profile';
function App() {
  return (
    <div >
      <Navbar />
      <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/review' element={<Review/>} />
      <Route path='/review' element={<Review/>} />
      <Route path='/profile' element={<Profile/>} />
        <Route path='/appointment' element={
          
          <RequireAuth>
<Appointment />
          </RequireAuth>
          } />
      <Route path='*' element={<NMotFound/>} />

      </Routes>
      
    </div>
  );
}

export default App;
