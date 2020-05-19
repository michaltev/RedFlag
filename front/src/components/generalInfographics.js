import React from 'react';
import '../styles/infographics.css';
import '../App.css';
import PeriodInfographics from './period/periodInfographics.js';
import EventsInfographics from './events/eventsInfographics.js';

class GeneralInfographics extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.getCurrCalendar = this.getCurrCalendar.bind(this);
        
    }
    
    getCurrCalendar () { return (this.props.mode === "Period" ? <PeriodInfographics></PeriodInfographics>: <EventsInfographics></EventsInfographics>)}

    
    render() {
        return (
          <div className="General-calendar">
            {this.getCurrCalendar()}
          </div>
        );
    }
  }
  

  export default GeneralInfographics;