import React from 'react';
import '../styles/headerFooter.css'
import infographics from '../images/infographicsFooter.JPG';
import calendar from '../images/calendarFooter.JPG';
import activityLog from '../images/activityLogFooter.JPG';

class GeneralFooter extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {infographics, calendar, activityLog};
        this.handleClick = this.handleClick.bind(this);
        
    }
    
    handleClick (event) {
        event.preventDefault();
        let name = event.target.value;
        this.props.pageClick(name);
    }
    

    
    render() {
        return (
          <div className="Footer-wrap">
              <img src={this.state[this.props.page]} className="Footer-image"></img>
              <button className="Page-box Clendar-box" value="calendar" onClick={this.handleClick}></button>
              <button className="Page-box Graphs-box" value="infographics" onClick={(e)=>this.handleClick(e)}></button>
              <button className="Page-box Activiy-log-box" value="activityLog" onClick={this.handleClick}></button>
           
          </div>
        );
    }
  }
  

  export default GeneralFooter;