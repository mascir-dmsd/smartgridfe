import './App.css'
import LoginPage from './components/LoginPage/LoginPage';
import SupervisionDash from './components/SupervisionDash';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>      
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/" element={<SupervisionDash/>} />  
          <Route path="/*" element={<Dashboard/>} />    
      </Routes>
    </Router>
  );
}

function Dashboard() {
  return (
    <Routes>
      <Route path=':supervision' element={<SupervisionDash/>} />
      <Route path=':control'  />
      <Route path=':optimisation'  />
      <Route path=':prediction'  />
      <Route path=':configuration'  />
    </Routes>
  );
}

export default App;
