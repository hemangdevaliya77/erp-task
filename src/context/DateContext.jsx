import React, { createContext, useState, useContext } from 'react';
import dayjs from 'dayjs';

// Create a Context to store and update the selected date
const DateContext = createContext();

// Custom hook to consume the DateContext
export const useDateContext = () => {
  return useContext(DateContext);
};


// Provider component to wrap around your app
export const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Default to current date

  // Handle date change
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);  // Update selectedDate in state
  };

  return (
    <DateContext.Provider value={{ selectedDate, handleDateChange }}>
      {children}
    </DateContext.Provider>
  );
};
