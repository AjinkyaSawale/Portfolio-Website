// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MyNavbar } from "./components/MyNavbar";
import { Banner } from "./components/Banner";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Banner/>
        <Routes>
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


