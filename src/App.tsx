import React from 'react';
import './App.css';
import { MissionsGrid } from './part2/MissionsGrid';
import { data } from './shared/data';

function App() {
  return (
    <div className="App">
      <MissionsGrid data={data}></MissionsGrid>
    </div>
  );
}

export default App;
