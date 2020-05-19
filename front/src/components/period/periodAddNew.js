import React from 'react';
import Moods from '../moods/moods.js';
import '../../styles/addNew.css';
import '../../App.css';


class PeriodAddNew extends React.Component {
    render() {
      return <div>
          <h2 className="Head-text">this is period add new</h2>  

          <Moods/>        
      </div>
    }
  }

export default PeriodAddNew;