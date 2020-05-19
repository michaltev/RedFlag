import React from 'react';
import '../../styles/calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class EventsCalendar extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);
        this.tileContent = this.tileContent.bind(this);
        this. state = {
            date: new Date(),
            eventList : [{date:2, type:"physical"}, {date:4, type:"mental"}, {date:10, type:"verbal"}, {date:12, type:"digital"}, {date:16, type:"verbal"}, {date:18, type:"mental"}]
        }
        
    }
    
    onChange = date => this.setState({ date })

    tileContent (dateData) {
      let {activeStartDate, date, view} = dateData;
      console.log(activeStartDate);
      console.log(date);
      console.log(view);
      let dateInMonth = date.getDate();

      var isEventDate = (event) => {
        console.log(event);
        return event.date === dateInMonth;
      }

      if (view === 'month')
      {
        let currEvent = this.state.eventList.find(isEventDate);
        if (currEvent === undefined) {
          return "";
        }

        return "Event-" + currEvent.type;

      }
    }
    
    render() {
        return (
          <div>
            <h3>Red Flag Calendar</h3>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
              calendarType="Hebrew"
              tileClassName={this.tileContent}
            />
          </div>
        );
    }
  }
  

  export default EventsCalendar;