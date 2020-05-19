import React from 'react';
import SingleMood from './singleMood';
import '../../styles/moods.css';
import '../../App.css';

class Moods extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			moods: []
		};
	}

	componentDidMount(){
		fetch('http://localhost:3000/moods', {
	          method: 'get',
	          headers: {'Content-Type':'application/json'}
	    })
	    .then(response => response.json())
	    .then(data => {
	        	this.setState({moods: data});
	    	});
  	}

	onMoodChoose = (value) => {
		this.props.onChooseMood(value);
	}

	render(){
		return (
			<div>
				<p className="add-card-titles"> Mood </p>
				<div className="container">
		        {
		          this.state.moods.map((mood, i) => {
		            return (
		              <SingleMood
		                key={i} 
		                mood={mood} 
	                	isChosen={mood.id==this.props.chosenMood}
		                onClick={this.onMoodChoose}
		                />
		            );
		          })
		        }
		      	</div>
			</div>
		)
	}
}

export default Moods;