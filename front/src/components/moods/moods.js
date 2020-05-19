import React from 'react';
import SingleMood from './singleMood';
import './moods.css';

class Moods extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			moods: [],
			chosenMood: {}
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
		this.setState({chosenMood: value});
	}

	render(){
		return (
			<div>
				<h2> Mood </h2>
				<div className="container">
		        {
		          this.state.moods.map((mood, i) => {
		            return (
		              <SingleMood
		              	className="item"
		                key={i} 
		                mood={mood} 
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