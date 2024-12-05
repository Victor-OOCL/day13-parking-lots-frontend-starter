import React from 'react';
import './App.css';
import ParkingLot from './components/ParkingLot';

function App() {
  const sampleParkingLot = {
    id: 2,
    name: 'City Mall Garage',
    tickets: [
      { plateNumber: 'ABC123', position: 1, parkingLot: 2 },
      { plateNumber: 'DEF456', position: 2, parkingLot: 2 },
      { plateNumber: 'GHI789', position: 3, parkingLot: 2 }
    ],
    capacity: 12,
    availableCapacity: 9,
    availablePositionRate: 0.75,
    full: false
  };

  return (
    <div className="App">
      <header className="App-header">
        <ParkingLot parkingLot={sampleParkingLot} />
      </header>
    </div>
  );
}

export default App;