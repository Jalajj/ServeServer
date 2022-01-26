import "./App.css"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navy from "./components/Navbar/Navy";
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Container from "./components/MainContainer/Container";
import About from "./components/About/About";
import Footer from './components/Footer/Footer';

function App() {
  
  return (
<>
<Router>
   <Navy />
    <Routes>
      <Route path="/" exact element={<Container />} /> 
      <Route path="/contact" exact element={<Contact />} /> 
      <Route path="/services" exact element={<Services />} /> 
      <Route path="/about" exact element={<About />} /> 
    </Routes>
   <Footer />
  </Router>
</>

  );
}

export default App;
