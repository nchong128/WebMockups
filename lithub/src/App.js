import React from 'react';
import './App.scss';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar/>

      {/*Columns*/}
      <div className="columns">
        {/*Profile*/}
        <div className="column is-3 is-one-third-tablet">

        </div>

        {/*Main content*/}
        <div className="column is-9">
        <p>main</p>
        </div>
      </div>

    </>
  );
}

export default App;
