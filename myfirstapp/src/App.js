// import Welcome from "./Welcome";
// import Header from "./Header";

// import Footer from "./Footer";
// import LifeCycleDemo from "./LifeCycleDemo";
// import Timer from "./Timer";
// import ErrorBoundary from "./ErrorBoundary";
// import DivisionComponent from "./DivisionComponent";
// import ArrayComponent from "./ArrayComponent";
// import DepartmentList from "./DepartmentList";
import Modal from "./Modal";
import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App() {
  // const [show, setShow] = React.useState(false);  
  return (
    <div>
      <h2>student portal</h2>
      {/* <button onClick={() => setShow(true)}>open modal</button>

      {show && (
        <Modal>
          <h3>This is a portal modal</h3>
          <button onClick={() => setShow(false)}>close modal</button>
        </Modal>
      )}
      
     <Modal /> */}

     <nav>
      <Link to="/">Home</Link> | {" "}
      <Link to="/about">about</Link> | {" "}
      <Link to="/contact">contact</Link> | {" "}
     </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


    </div>
  );
}

export default App;
