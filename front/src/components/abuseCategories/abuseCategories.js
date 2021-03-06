import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../../App.css';

class AbuseCategories extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			parentCategories: [],
			subCategories: [],
			chosenParentCategory: -1,
			chosenSubCategories: []
		};
	};

	componentDidMount(){
	fetch('http://localhost:3000/abusecategories', {
	          method: 'get',
	          headers: {'Content-Type':'application/json'}
        })
    .then(response => response.json())
    .then(data => {
        	this.setState({parentCategories: data});
    	});
  };

	onParentCategoryClick = (value) => {
		if(this.state.chosenParentCategory === value.id)
		{
			this.setState({subCategories: [], chosenParentCategory: -1});
		}
		else 
		{
			this.displaySubCategories(value.id);
		}
	}

	displaySubCategories = (parentCategoryID) => {
		fetch(`http://localhost:3000/abusecategories/${parentCategoryID}`, {
	          method: 'get',
	          headers: {'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(data => {
        	this.setState({
        		chosenParentCategory: parentCategoryID,
        		subCategories : data})
        });
	}

	render(){
		return (
			<div>
				<p className="add-card-titles"> Behaviors/Incidents </p>
				<div>
		        {
		          this.state.parentCategories.map((parentCategory, i) => {
		          	if(this.state.chosenParentCategory === parentCategory.id)
		          	{
		          		return (
			              <div key={parentCategory.id}>
			              	<p className="add-card-subtitles"
			              		onClick={() => this.onParentCategoryClick(parentCategory)}> 
			              		{parentCategory.value}
			              	</p>

			              	<div className="paddingLeft20">
			              	{
				              this.state.subCategories.map((subCategory, i) => {
			              		return (
		              				<FormGroup row key={subCategory.id}>
									      <FormControlLabel className="add-card-options"
									        control={<Checkbox 
									        			checked={this.props.chosenSubCategories.includes(subCategory.id)}
									        			onChange={() => this.props.onSubCategoryClick(subCategory.id)}
									        			name={subCategory.value} />}
									        label={subCategory.value}
									      />
								    </FormGroup>)
				              })
				            }
				            </div>
			              </div>
			            );
		          	}
		          	else
		          	{
			            return (
			              <div key={parentCategory.id}>
			              	<p className="add-card-subtitles"
			              	   onClick={() => this.onParentCategoryClick(parentCategory)}> 
			              		{parentCategory.value}
			              	</p>
			              </div>
			            );
			        }
		          })
		        }
		      	</div>
			</div>
		)
	}
}

export default AbuseCategories;