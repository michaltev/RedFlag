import React from 'react';
import '../../styles/calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class EventsCalendar extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);
        this.tileClass = this.tileClass.bind(this);
        this.onViewChange = this.onViewChange.bind(this);
        this.getViewData = this.getViewData.bind(this);
        this. state = {
            date: new Date(),
            eventList : [{date:2, type:"physical"}, {date:4, type:"mental"}, {date:10, type:"verbal"}, {date:12, type:"digital"}, {date:16, type:"verbal"}, {date:18, type:"mental"}]
        };
        
    }

    componentDidMount(){
      let now = new Date();
      this.getViewData(now.getMonth(), now.getFullYear())
    }
    
    onChange  (date) {
      console.log(date);
      this.props.addInDate(date);
    } 

    tileClass (dateData) {
      let {activeStartDate, date, view} = dateData;
      let dateInMonth = date.getDate();

      var isEventDate = (event) => {
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

    getViewData(month, year)
    {
      //fetch().then (eventList => this.setState({eventList}))
      console.log("fetching for " + month + "." + year );
    }
    

    onViewChange ({ activeStartDate, view }) {
      console.log(activeStartDate);
      console.log(view);
      if (view === "month")
      {
        this.getViewData(activeStartDate.getMonth(), activeStartDate.getFullYear())
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
              tileClassName={this.tileClass}
              onActiveStartDateChange={this.onViewChange}
              onViewChange={this.onViewChange}
            />
          </div>
        );
    }
  }
  

  export default EventsCalendar;