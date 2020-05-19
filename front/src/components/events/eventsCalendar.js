import React from 'react';
import '../../styles/calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class EventsCalendar extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);
        this. state = {
            date: new Date()
        }
        
    }
    
    onChange = date => this.setState({ date })

    
    render() {
        return (
          <div>
            <h3>Red Flag Calendar</h3>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
              calendarType="US"
            />
          </div>
        );
    }
  }
  

  export default EventsCalendar;