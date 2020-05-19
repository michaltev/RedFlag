import React from 'react'; 
import '../../styles/moods.css';

class SingleMood extends React.Component {

  render(){
    return (
      <div className="item"
      		onClick={() => this.props.onClick(this.props.mood.id)}>
        <img alt='mood' src={require(`../../images/moods/${this.props.mood.value}.svg`)}/> 
        <p className={this.props.isChosen ? "moodtitle chosen" : "moodtitle"}> {this.props.mood.value} </p>
      </div>
    );
  }
}


export default SingleMood;