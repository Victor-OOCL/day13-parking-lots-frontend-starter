import React from 'react';
import './App.css';
import ParkingSite from './components/ParkingSite';

function App() {
  const sampleTickets = [
    { plateNumber: 'ABC123', position: 1, parkingLot: 1 },
    { plateNumber: 'DEF456', position: 2, parkingLot: 1 },
    { plateNumber: 'GHI789', position: 3, parkingLot: 1 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {sampleTickets.map((ticket, index) => (
            <ParkingSite key={index} ticket={ticket} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
