import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import SideBar from './Components/Navbar/SideBar';
import TopBar from './Components/Navbar/TopBar';
import Tickets from './Components/Home/Tickets';
import CreateTicket from './Components/CreateTicket/CreateTicket';
import EditTicket from './Components/Home/EditTicket';
import LoginPage from './Components/ClientLogin/ClientLoginPage';
import ClientRegisterPage from './Components/ClientLogin/ClientRegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<ClientRegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/createticket" element={<CreateTicket />} />
        <Route path="/:id/edit-ticket" element={<EditTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
