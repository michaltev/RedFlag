import React from 'react';
import SingleMood from './singleMood';

class Moods extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			moods: props.moods,
			chosenMode: {}
		};
	}

	onMoodChoose = (value) => {
		this.setState({chosenMode: value});
	}

	render(){
		return (
			<div>
				<div>
		        {
		          this.state.moods.map((mood, i) => {
		            return (
		              <SingleMood
		                key={i} 
		                mood={mood} 
		                onMoodChoose={this.onMoodChoose}
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