import React from 'react';
import '../styles/main.css';
import GeneralCalendar from './generalCalendar.js';
import Graphs from './graphs.js';
import GeneralFooter from './generalFooter.js';
import '../styles/main.css';

class Main extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {mode: "Period", page: "calendar"};

        this.changeMode = this.changeMode.bind(this);
    }

    changeMode () {
        if (this.state.mode === "Period") {
            this.setState({mode: "Events"});
        }
        else {
            this.setState({mode: "Period"});
        }
    }


    render() {
      return <div className="Main">
          <h1>Red - Flag</h1>
          <button onClick={this.changeMode}>changeMode</button>
          <GeneralCalendar mode={this.state.mode}></GeneralCalendar>
          <Graphs></Graphs>
          <GeneralFooter page={this.state.page}></GeneralFooter>
      </div>
    }
  }

  export default Main;