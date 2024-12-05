import React from 'react';
import './App.css';
import { ParkingLotProvider } from './ParkingLotContext';
import ParkingLotGroup from './components/ParkingLotGroup';
import ControlBar from './components/ControlBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParkingLotProvider>
          <ControlBar />
          <ParkingLotGroup />
        </ParkingLotProvider>
      </header>
    </div>
  );
}

export default App;