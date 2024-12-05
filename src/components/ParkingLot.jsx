import React from 'react';
import ParkingSite from './ParkingSite';

function ParkingLot({ parkingLot }) {
  const { name, tickets } = parkingLot;

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginTop: '20px'
  };

  return (
    <div>
      <h2>{name}</h2>
      <div style={gridStyle}>
        {tickets.map((ticket, index) => (
          <ParkingSite key={index} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default ParkingLot;