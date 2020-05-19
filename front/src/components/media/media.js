import React from 'react'; 
import '../../App.css';

class Media extends React.Component {

  render(){
    return (
      <div>
		<p className="add-card-titles"> Media </p>
		<img className="medialogo" alt='Media' src={require(`../../images/media.jpg`)}/> 
	</div>


    );
  }
}


export default Media;