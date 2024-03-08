import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
<div className="cards">
  <Card title ="card 1" description = "card 2 desc"/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>

</div>
      <Footer />
    </>
  );
}

export default App;
