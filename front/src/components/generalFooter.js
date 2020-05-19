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
              <span className="Page-box">1</span>
              <span className="Page-box">2</span>
              <span className="Page-box">3</span>
           
          </div>
        );
    }
  }
  

  export default GeneralFooter;