import React from 'react'; 

class SingleMood extends React.Component {

  render(){
    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 w-30'>
        <img alt='mood' src={require('./disappointed.svg')}/> 
        <p> {this.props.mood.value} </p>
      </div>
    );
  }
}


export default SingleMood;