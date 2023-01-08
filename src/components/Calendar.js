import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import Badge from '@mui/material/Badge'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import CircleIcon from '@mui/icons-material/Circle'
import './styles/calendar.css'
import { changeDateDetails } from './Dashboard'

const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
}; 


const appointmentDates = ["2023-01-12 11:00:00", "2023-02-02 11:00:00", "2023-01-04 23:00:00"]
const appDates = new Array(appointmentDates.length) 
var x
for(var i = 0; i < appointmentDates.length; i++){
  x = new Date(appointmentDates[i])
  appDates[i] = x.toLocaleDateString('en-IN', options)
}

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  // console.log(x.toLocaleDateString('en-IN', options))
  const [highlightedDays, setHighlightedDays] = useState(appDates);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        // mask='____/__/__'
        variant='static'
        orientation='portrait'
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          changeDateDetails(newValue)
        }}
        renderInput={(params) => {
          <TextField {...params} />;
        }}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.toLocaleDateString('en-IN', options) ) >= 0;

          return (
            <Badge
              key={day.toString()}
              overlap='circular'
              badgeContent={isSelected ? <CircleIcon color='red' fontSize='' /> : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;