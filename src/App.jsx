import { Routes, Route, Link } from 'react-router-dom';
import CrewmateList from './pages/CrewmateList';
import CreateCrewmate from './pages/CreateCrewmate';
import EditCrewmate from './pages/EditCrewmate';
import CrewmateDetail from './pages/CrewmateDetail';
import Home from './pages/Home';
import './App.css';

const App = () => (
  <div className="app-container">
    <nav className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/create">Create a Crewmate!</Link>
      <Link to="/gallery">Crewmate Gallery</Link>
    </nav>

    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />
        <Route path="/detail/:id" element={<CrewmateDetail />} />
        <Route path="/gallery" element={<CrewmateList />} />
      </Routes>
    </div>
  </div>
);

export default App;
