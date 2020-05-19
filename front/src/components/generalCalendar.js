import React from 'react';
import '../styles/calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PeriodCalendar from './period/periodCalendar.js';
import EventsCalendar from './events/eventsCalendar.js';

class GeneralCalendar extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.getCurrCalendar = this.getCurrCalendar.bind(this);
        
    }
    
    getCurrCalendar () { return (this.props.mode === "Period" ? <PeriodCalendar></PeriodCalendar>: <EventsCalendar></EventsCalendar>)}

    
    render() {
        return (
          <div>
            {this.getCurrCalendar()}
          </div>
        );
    }
  }
  

  export default GeneralCalendar;