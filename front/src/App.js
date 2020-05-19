import React from 'react';
import './App.css';
import Main from './components/main.js';
import Moods from './components/moods/moods.js';
import AbuseCategories from './components/abuseCategories/abuseCategories.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main></Main>
        
      </header>

      <Moods/>
      <AbuseCategories/>
    </div>
  );
}

export default App;
