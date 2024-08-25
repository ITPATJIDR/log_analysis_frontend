import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Dashboards from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex">
        <SideNavbar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboards />} />
            <Route path="/dashboard" element={<Dashboards />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;

