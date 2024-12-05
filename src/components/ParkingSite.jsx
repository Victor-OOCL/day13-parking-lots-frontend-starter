import React from 'react';

function ParkingSite({ ticket }) {
  const { plateNumber } = ticket;

  const cellStyle = {
    border: '1px solid black',
    padding: '20px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#377b75',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
  };

  return (
    <div style={cellStyle}>
      {plateNumber}
    </div>
  );
}

export default ParkingSite;