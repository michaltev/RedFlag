import React from 'react';

class AbuseCategories extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			parentCategories: props.parentCategories,
			subCategories: [],
			chosenParentCategory: -1,
			chosenSubCategories: []
		};
	}

	onParentCategoryClick = (value) => {
		if(this.state.chosenParentCategory === value.id)
		{
			this.setState({subCategories: [], chosenParentCategory: -1});
		}
		else 
		{
			displaySubCategories(value.id);
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
        		chosenParentCategory: value,
        		subCategories : data})
        });
	}

	onSubCategoryClick = (value) => {
		let lstTempCategories = this.state.chosenSubCategories;

		if(this.state.chosenSubCategories.includes(value.id))
		{
			lstTempCategories = lstTempCategories.filter(id => id === value.id);
		}
		else
		{
			lstTempCategories.push(value.id);
		}

		this.setState({chosenSubCategories : lstTempCategories});
	}

	render(){
		return (
			<div>
				<div>
		        {
		          this.state.parentCategories.map((parentCategory, i) => {
		          	if(this.state.chosenParentCategory === parentCategory.id)
		          	{
		          		return (
			              <div>
			              	<p onClick={this.onParentCategoryClick}> 
			              		{parentCategory.value}
			              	</p>
			              </div>

			              this.state.subCategories.map((subCategory, i) => {
		              		<Checkbox
						        checked={this.state.chosenSubCategories.includes(subCategory.id)}
						        onChange={this.onSubCategoryClick}
						        inputProps={{ 'aria-label': 'primary checkbox' }}
						      />
			              })
			            );
		          	}
		          	else
		          	{
			            return (
			              <div>
			              	<p onClick={this.onParentCategoryClick}> 
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

export default Moods;