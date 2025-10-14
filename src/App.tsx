import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import SystemArchitecture from './pages/SystemArchitecture';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/projects/shikayat/architecture" element={<SystemArchitecture />} />
      </Routes>
    </Router>
  );
}

export default App;
