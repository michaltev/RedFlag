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
			mood:"",
			description:"",
			date:"",
			userID:1
		};
	}

	setMood = (p_moodID) => {
		this.setState({mood : p_moodID});
	}

	handleAbuseCategoryClick = (p_abuseCategoryID) => {
		let lstTempCategories = this.state.abuseCategories;

		if(this.state.abuseCategories.includes(p_abuseCategoryID))
		{
			lstTempCategories = lstTempCategories.filter(id => id !== p_abuseCategoryID);
		}
		else
		{
			lstTempCategories.push(p_abuseCategoryID);
		}

		this.setState({abuseCategories : lstTempCategories});
	}

	onSave = () => {
		fetch('http://localhost:3000/eventscalendar/add', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				userID: 1,
				date: this.state.date,
				mood: this.state.mood,
				abuseCategories: this.state.abuseCategories,
				description: this.state.description
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.loadUser(user);
				this.setState({favbandid: user.favbandid, favbandname:user.favbandname, hasfavband:true});
			}
		});

	}

    render() {
      return <div>
          <h2 className="Head-text">this is events add new</h2>  

          <Moods chosenMood={this.state.mood} 
          		 onChooseMood={this.setMood}/>
          <AbuseCategories chosenSubCategories={this.state.abuseCategories} 
          				   onSubCategoryClick={this.handleAbuseCategoryClick}/>
          <Media />
          <Notes />  

          <input  type="button"className="savebutton" value="Save" onClick={this.onSave} />     
      </div>
    }
  }

export default EventsAddNew;