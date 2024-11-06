import React from "react";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
function Calender() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DateCalendar']}>
      <DateCalendar
        referenceDate={dayjs()} 
        views={['year', 'month', 'day']}
      />
    </DemoContainer>
  </LocalizationProvider>
  )
}

export default Calender