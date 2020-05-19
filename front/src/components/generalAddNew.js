import React from 'react';
import '../styles/addNew.css';
import PeriodAddNew from './period/periodAddNew.js';
import EventsAddNew from './events/eventsAddNew.js';

class GeneralAddNew extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.getCurrCalendar = this.getCurrCalendar.bind(this);
        
    }
    
    getCurrCalendar () { return (this.props.mode === "Period" ? <PeriodAddNew></PeriodAddNew>: <EventsAddNew></EventsAddNew>)}

    
    render() {
        return (
          <div className="General-calendar">
            {this.getCurrCalendar()}
          </div>
        );
    }
  }
  

  export default GeneralAddNew;