import React from 'react';
import Moods from '../moods/moods.js';
import AbuseCategories from '../abuseCategories/abuseCategories.js';
import Media from '../media/media.js';
import Notes from '../notes/notes.js';
import Button from '@material-ui/core/Button';
import '../../styles/addNew.css';
import '../../App.css';


class EventsAddNew extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			abuseCategories: [],
			mood:{},
			description:"",
			date:"",
			userID:""
		};
	};

	setMood = (p_moodID) => {
		this.setState({chosenMood : p_moodID});
	};

	handleAbuseCategoryClick = (p_abuseCategoryID) => {
		let lstTempCategories = this.state.abuseCategories;

		if(this.state.abuseCategories.includes(p_abuseCategoryID))
		{
			lstTempCategories = lstTempCategories.filter(id => id === p_abuseCategoryID);
		}
		else
		{
			lstTempCategories.push(p_abuseCategoryID);
		}

		this.setState({abuseCategories : lstTempCategories});
	};

    render() {
      return <div>
          <h2 className="Head-text">this is events add new</h2>  

          <Moods />
          <AbuseCategories/>
          <Media />
          <Notes />  

          <input  type="button"className="savebutton" value="Save" />     
      </div>
    }
  }

export default EventsAddNew;