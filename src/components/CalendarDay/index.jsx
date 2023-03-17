import React from 'react';
import {format} from "date-fns";
import './style.css';


const CalendarDay = ({day, days}) => {
  return (
    <tr key={day}>
      {days.map((d) =>(
        <td key={d}>
          <div className={`calendar-cell`}>
            {format(d,'d')}
          </div>
        </td>
      ))}
    </tr>
  );
};

export default CalendarDay;
