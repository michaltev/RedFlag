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
        this.changePage = this.changePage.bind(this);
    }

    changeMode () {
        if (this.state.mode === "Period") {
            this.setState({mode: "Events"});
        }
        else {
            this.setState({mode: "Period"});
        }
    }

    changePage (pageName) {
        console.log("main change page: " + pageName)
        let page = pageName;
        this.setState({page});
    }

    getCurrPage() {
        let page;
        switch (this.state.page) {
            case "calendar":
                page = <GeneralCalendar mode={this.state.mode}></GeneralCalendar>;
                break;
            case "infographics":
                page = <Graphs></Graphs>
                break;
            case "activityLog":
                page;
                break;
            default:
                break;
        }
    }


    render() {
      return <div className="Main">
          <h1>Red - Flag</h1>
          <button onClick={this.changeMode}>changeMode</button>
          <GeneralCalendar mode={this.state.mode}></GeneralCalendar>
          <Graphs></Graphs>
          <GeneralFooter page={this.state.page} pageClick={this.changePage}></GeneralFooter>
      </div>
    }
  }

  export default Main;