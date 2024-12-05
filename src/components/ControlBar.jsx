import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ParkingLotContext } from '../ParkingLotContext';

function ControlBar() {
  const { state, dispatch } = useContext(ParkingLotContext);
  const [plateNumber, setPlateNumber] = useState('');
  const [parkingBoyType, setParkingBoyType] = useState('STANDARD');

  const handlePlateNumberChange = (e) => {
  const value = e.target.value.toUpperCase();
  const regex = /^[A-Z]{0,2}-?\d{0,4}$/;
  if (regex.test(value) || value === '') {
    setPlateNumber(value);
  }
};

  const handlePark = () => {
    axios.post(`http://localhost:8080/parking-lots/park?parkingBoyType=${parkingBoyType}`, { plateNumber })
      .then(response => {
        const newTicket = response.data;
        dispatch({ type: 'ADD_TICKET', payload: newTicket });
      })
      .catch(error => {
        console.error('Error parking the car:', error);
      });
  };

  const handleFetch = () => {
    const ticket = state.parkingLots.flatMap(lot => lot.tickets).find(t => t.plateNumber === plateNumber);
    if (ticket) {
      axios.post(`http://localhost:8080/parking-lots/fetch?parkingBoyType=${parkingBoyType}`, ticket )
        .then(response => {
          dispatch({ type: 'REMOVE_TICKET', payload: ticket });
        })
        .catch(error => {
          console.error('Error fetching the car:', error);
        });
    } else {
      console.error('Ticket not found');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        value={plateNumber}
        onChange={handlePlateNumberChange}
        placeholder="AB-1234"
        style={{ textTransform: 'uppercase' }}
      />
      <select value={parkingBoyType} onChange={(e) => setParkingBoyType(e.target.value)}>
        <option value="STANDARD">STANDARD</option>
        <option value="SMART">SMART</option>
        <option value="SUPER_SMART">SUPER_SMART</option>
      </select>
      <button onClick={handlePark}>Park</button>
      <button onClick={handleFetch}>Fetch</button>
    </div>
  );
}

export default ControlBar;