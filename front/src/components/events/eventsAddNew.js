import React from 'react';
import Moods from '../moods/moods.js';
import AbuseCategories from '../abuseCategories/abuseCategories.js'
import '../../styles/addNew.css';
import '../../App.css';


class EventsAddNew extends React.Component {
    render() {
      return <div>
          <h2 className="Head-text">this is events add new</h2>  

          <Moods/>
          <AbuseCategories/>        
      </div>
    }
  }

export default EventsAddNew;