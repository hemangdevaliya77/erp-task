import React,{useState,createContext,useContext} from "react";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function Calender() {

  const [selectedDate, setSelectedDate] = useState(dayjs());
 
  // Handle the date change
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);  // Update the state with the selected date
  };

  return (


    <>
    
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DateCalendar']}>
      <DateCalendar
        referenceDate={dayjs()} 
        views={['year', 'month', 'day']}
        sx={{backgroundColor:'white',borderRadius:'10px',height:'300px'}}
        onChange={handleDateChange} 
      />
    </DemoContainer>
  </LocalizationProvider>

  
    </>
  )
}

export default Calender