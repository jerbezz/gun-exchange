import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import AllGuns from './components/AllGuns'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AllGuns/>
        <Footer/>
      </div>
    );
  }
}

export default App;
