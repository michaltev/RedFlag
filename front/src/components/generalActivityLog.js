import React from 'react';
import '../styles/activityLog.css';
import '../App.css';
import PeriodActivityLog from './period/periodActivityLog.js';
import EventsActivityLog from './events/eventsActivityLog.js';

class GeneralActivityLog extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.getCurrCalendar = this.getCurrCalendar.bind(this);
        
    }
    
    getCurrCalendar () { return (this.props.mode === "Period" ? <PeriodActivityLog></PeriodActivityLog>: <EventsActivityLog></EventsActivityLog>)}

    
    render() {
        return (
          <div className="General-calendar">
            {this.getCurrCalendar()}
          </div>
        );
    }
  }
  

  export default GeneralActivityLog;