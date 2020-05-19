import React from 'react';
import TextField from '@material-ui/core/TextField'; 
import '../../App.css';

class Notes extends React.Component {

  render(){
    return (
      <div className="add-card-titles">
		<p> Notes </p>
		<TextField
          multiline
          fullWidth
          rows="4"
          placeholder="Write something..."
          variant="outlined"
        />
	</div>


    );
  }
}


export default Notes;