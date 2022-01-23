import Counters from './components/counters';
import Navbar from './components/navbar';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar/>
        <main className='container'>
          <Counters />
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
