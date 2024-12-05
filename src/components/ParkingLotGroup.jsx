import React, { useContext } from 'react';
import { ParkingLotContext } from '../ParkingLotContext';
import ParkingLot from './ParkingLot';

function ParkingLotGroup() {
  const { state } = useContext(ParkingLotContext);
  const { parkingLots, loading, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const groupStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px', // Increased gap for more spacing
    padding: '20px' // Added padding for additional spacing
  };

  return (
    <div style={groupStyle}>
      {parkingLots.map(parkingLot => (
        <ParkingLot key={parkingLot.id} parkingLot={parkingLot} />
      ))}
    </div>
  );
}

export default ParkingLotGroup;