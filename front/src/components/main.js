import React from 'react';
import '../styles/main.css';
import GeneralCalendar from './generalCalendar.js';
import GeneralInfographics from './generalInfographics.js';
import GeneralActivityLog from './generalActivityLog.js';
import GeneralFooter from './generalFooter.js';
import '../styles/main.css';

class Main extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {mode: "Period", page: "calendar"};

        this.changeMode = this.changeMode.bind(this);
        this.changePage = this.changePage.bind(this);
        this.getCurrPage = this.getCurrPage.bind(this);
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
                page = <GeneralInfographics mode={this.state.mode}></GeneralInfographics>
                break;
            case "activityLog":
                page = <GeneralActivityLog mode={this.state.mode}></GeneralActivityLog>
                break;
            default:
                break;
        }

        return page;
    }


    render() {
      return <div className="Main">
          <h1>Red - Flag</h1>
          <button onClick={this.changeMode}>changeMode</button>
          {this.getCurrPage()}
          <GeneralFooter page={this.state.page} pageClick={this.changePage}></GeneralFooter>
      </div>
    }
  }

  export default Main;