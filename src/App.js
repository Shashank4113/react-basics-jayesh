import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import React, { useState } from 'react';

function App() {

  const [name,setName] = useState('Hsource Technologies');

  const handleClick = () => {
    setName('Vivek');
  }

  return (
    <div>
      <NavBar /><hr />
      <h1>Welcome { name }</h1>
      <p>In this { name } , we teaches python programming !</p>
      <button onClick={handleClick}>change</button><hr />
      <Footer />
    </div>
  ) 
}

export default App;
