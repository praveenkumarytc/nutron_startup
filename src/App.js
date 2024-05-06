import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { BrowserRouter, Routes, Route,NavLink } from 'react-router-dom';
import ContactScreen from './screens/ContactScreen';
import ProjectScreen from './screens/ProjectScreen';
import ServicesScreen from './screens/ServicesScreen';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomeScreen/>} />
         <Route path="/About" element={<AboutScreen/>} />
         <Route path="/Contact" element={<ContactScreen/>} />
         <Route path="/Services" element={<ServicesScreen/>} />
         <Route path="/Project" element={<ProjectScreen/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
