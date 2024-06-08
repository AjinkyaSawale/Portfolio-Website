// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MyNavbar } from "./components/MyNavbar";
import { Home } from "./Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ContactMe } from "./components/ContactMe";
//import { Footer } from "./Footer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;



