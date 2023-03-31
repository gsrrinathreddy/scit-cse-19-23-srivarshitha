import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Aboutme from './Pages/Aboutme';
import Qualification from './Pages/Qualification';
import Skills from './Pages/Skills';
import Hobbies from './Pages/Hobbies';
import Experience from './Pages/Experience';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/Aboutme" element={<Aboutme/>}/>`1 `
        <Route path="/Qualification" element={<Qualification/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Hobbies" element={<Hobbies/>}/>
        <Route path="/Experience" element={<Experience/>}/>
              </Routes>
    </div>
  );
}

export default App;
