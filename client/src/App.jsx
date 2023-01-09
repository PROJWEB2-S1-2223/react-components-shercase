import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const titre=
  (<h1> "liste des courses"</h1>
  );

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
 <div><Titre /></div>
<ul>

    <li> pomme <input type= "checkbox"/> </li>
    <li> poire <input type= "checkbox"/> </li>
    <li> eau  <input type= "checkbox"/> </li>
    <li> carotte <input type= "checkbox"/> </li>
</ul>
    <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
  function Titre(){
    <h1>Liste des courses</h1>
  }
}

export default App;
