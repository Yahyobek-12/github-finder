import Home from '../Components/Home';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import UserProfile from '../Components/UserProfile';

const App = () => {
  return (
    <div className="app">
    <Navbar />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="/profile/:username" element={<UserProfile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
