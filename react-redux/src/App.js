import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <React.Fragment>
      <Header headerdata="React is used for Front end web app devlopment" />
        <h1>hOME PAGE</h1>
        <h2>{4 + 2}</h2>
      <Footer yeardata="2020"/>
    </React.Fragment>
  );
}

export default App;
