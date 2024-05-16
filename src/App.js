import './App.css';
import React from 'react'; // Ensure React is in scope when using JSX
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import Home from './web/Home';
import Blogs from './web/Blogs'; // Correct the import path as necessary
import Contact from './web/Contact'; // Correct the import path as necessary
import NoPage from './web/NoPage'; // Correct the import path as necessary

function Welcome(props) {
  return (
    <div>
      <h1>Hello World Function {props.name}?</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Menu</h1>
      <a class="btn btn-primary m-1" href="/">Home</a>
      <a class="btn btn-primary m-1" href="/blogs">Blogs</a>
      <a class="btn btn-primary m-1" href="/contact">Contact</a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

