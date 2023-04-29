import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Aboutme from './Pages/Aboutme';
import Qualification from './Pages/Qualification';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Certification from './Pages/Certification';
import Projects from './Pages/Projects';
import Contactme from './Pages/Contactme';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/Aboutme" element={<Aboutme/>}/>`1 `
        <Route path="/Qualification" element={<Qualification/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Hobbies" element={<Hobbies/>}/>
        <Route path="/Certification" element={<Certification/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Contactme" element={<Contactme/>}/>
              </Routes>
    </div>
  );
}

export default App;
