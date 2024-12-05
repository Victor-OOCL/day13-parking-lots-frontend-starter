import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const ParkingLotContext = createContext();

const initialState = {
  parkingLots: [],
  loading: true,
  error: null
};

const parkingLotReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        parkingLots: action.payload,
        loading: false
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'ADD_TICKET':
      return {
        ...state,
        parkingLots: state.parkingLots.map(lot => {
          if (lot.id === action.payload.parkingLot) {
            return {
              ...lot,
              tickets: [...lot.tickets, action.payload] // Add the ticket to the end of the tickets array
            };
          }
          return lot;
        })
      };
    case 'REMOVE_TICKET':
      return {
        ...state,
        parkingLots: state.parkingLots.map(lot =>
          lot.id === action.payload.parkingLot ?
            {
              ...lot,
              tickets: lot.tickets.filter(ticket => ticket.plateNumber !== action.payload.plateNumber)
            } : lot
        )
      };
    default:
      return state;
  }
};

const ParkingLotProvider = ({ children }) => {
  const [state, dispatch] = useReducer(parkingLotReducer, initialState);

  React.useEffect(() => {
    axios.get('http://localhost:8080/parking-lots')
      .then(response => {
        if (response.data.code === 200) {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: response.data.data
          });
        } else {
          dispatch({
            type: 'FETCH_ERROR',
            payload: 'Error fetching data'
          });
        }
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_ERROR',
          payload: error.message
        });
      });
  }, []);

  return (
    <ParkingLotContext.Provider value={{ state, dispatch }}>
      {children}
    </ParkingLotContext.Provider>
  );
};

export { ParkingLotContext, ParkingLotProvider };