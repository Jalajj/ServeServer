import "./App.css";
import React,{Suspense} from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navy from "./components/Navbar/Navy";
// import Services from './components/Services/Services';
// import Contact from './components/Contact/Contact';
 import Container from "./components/MainContainer/Container";
// import About from "./components/About/About";
import Footer from './components/Footer/Footer';
import Loading from "./components/Loading/Loading";

const About = React.lazy(() => import("./components/About/About"));
const Services = React.lazy(() => import("./components/Services/Services"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));

function App() {
  
  return (
<>
<Router>
   <Navy />
    <Routes>
      <Route path="/" exact element={<Container />} /> 
      <Route path="/contact" exact element={ <Suspense fallback={<Loading />}><Contact /></Suspense>} /> 
      <Route path="/services" exact element={ <Suspense fallback={<Loading />}><Services /></Suspense>} /> 
      <Route path="/about" exact element={<Suspense fallback={<Loading />}><About /></Suspense>} /> 
    </Routes>
   <Footer />
  </Router>
</>

  );
}

export default App;
