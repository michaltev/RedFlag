import React from 'react';
import '../../styles/calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class PeriodCalendar extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);
        this.tileClass = this.tileClass.bind(this);
        this. state = {
            date: new Date(),
            periodDates : [12,13,14,15,16],
            ovulationDates : [22,23,24,25]
        }
        
    }
    
    onChange  (date) {
      console.log(date);
      this.props.addInDate(date);
    } 

    tileClass (dateData) {
      let {activeStartDate, date, view} = dateData;
      console.log(activeStartDate);
      console.log(date);
      console.log(view);
      let dateInMonth = date.getDate();

      if (view === 'month')
      {
        let period = this.state.periodDates.indexOf(dateInMonth);
        let ovulation = this.state.ovulationDates.indexOf(dateInMonth);
        if (period !== -1) {
          return "Period-date";
        }

        if (ovulation !== -1) {
          return "Ovulation-date";
        }

        return "";

      }
    }

    render() {
        return (
          <div>
            <h3>Period Calendar</h3>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
              calendarType="Hebrew"
              tileClassName={this.tileClass}
            />
          </div>
        );
    }
  }
  

  export default PeriodCalendar;