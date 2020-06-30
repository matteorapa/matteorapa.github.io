import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './Welcome';
import Preview from './Preview'

import './App.css';

function App() {
  return (
    <div className="main">
      <Header />

      <Welcome />

      <Footer />

      {/* <Preview /> */}
    </div>
  );
}

export default App;
