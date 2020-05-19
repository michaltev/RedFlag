import React from 'react';
import '../styles/headerFooter.css'
import infographics from '../images/infographicsFooter.JPG';
import calendar from '../images/calendarFooter.JPG';
import activityLog from '../images/activityLogFooter.JPG';

class GeneralFooter extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {infographics, calendar, activityLog};
        //this.getCurrCalendar = this.getCurrCalendar.bind(this);
        
    }
    
    

    
    render() {
        return (
          <div>
           <img src={this.state[this.props.page]} className="Footer-image"></img>
          </div>
        );
    }
  }
  

  export default GeneralFooter;