import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
// import rocketHooks from './hooks/Rockets';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const rockets = useSelector((state) => state.rocketsReducer);
  // rocketHooks();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile rockets={rockets} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
