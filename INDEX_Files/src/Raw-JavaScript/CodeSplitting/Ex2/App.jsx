import React from 'react';
import './index.css';



const App = () => {

  // const btn = document.querySelector("button");

  async function loadHeavyFunction(){
    let heavy = await import('./heavy.js');
    console.log(heavy);
  }

  return (
    <div>
      <h1>Code Splitting with Dynamic import.</h1>
      <button onClick={loadHeavyFunction} >Click to Load Heavy Module.</button>
    </div>
  )
}

export default App
