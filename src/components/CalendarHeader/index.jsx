import React from 'react';
import {format} from "date-fns";
import './style.css'

const CalendarHeader = ({date, onPrevMonth, onNextMonth}) => {
  return (
    <div className='calendar-header'>
     <button onClick={onPrevMonth}>&lt;</button>
      <h2>{format(date, 'MMM yyyy')}</h2>
      <button onClick={onNextMonth}>&gt;</button>
    </div>
  );
};

export default CalendarHeader;
