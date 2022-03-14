import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import SideBar from './Components/Navbar/SideBar';
import TopBar from './Components/Navbar/TopBar';
import Tickets from './Components/Home/Tickets';
import LinaerStepper from './Components/CreateTicket/LinaerStepper';

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/form" element={<LinaerStepper />} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
