import logo from './logo.svg';
import './App.css';

import React from 'react';

const App = () => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Reacts
      </a>
      <div>
      <h1>React File Upload Example</h1>
      <input id="song_file" type="file" accept=".mp3, .wav"/>
      <div >
          <h2>Metadata</h2>
          <ul className="metadata">
            <li ><img id="song_metadata_cover"/> </li>
            <li><b>Title:</b> <span id="song_metadata_title"></span></li>
            <li ><b>Artist:</b> <span id="song_metadata_artist"></span> </li>
            <li ><b>Album:</b> <span id="song_metadata_album"></span> </li>
            <li ><b>Genre:</b> <span id="song_metadata_genre"></span> </li>
          </ul>
      </div>
    </div>
    </header>
    
  </div>
 
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
