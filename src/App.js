import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import SideBar from './Components/Navbar/SideBar';
import TopBar from './Components/Navbar/TopBar';

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
