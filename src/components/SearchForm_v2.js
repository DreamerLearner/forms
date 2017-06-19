import React, { Component } from 'react';
import t from 'tcomb-form';

import ReactWidgets from 'react-widgets';

const FormSchema = t.struct({
  name: t.String,         // a required string
  age: t.maybe(t.Number), // an optional number
  rememberMe: t.Boolean   // a boolean
})

const Multiselect = ReactWidgets.Multiselect;
const colors = ['green','blue','red','black'];

class SearchForm extends Component{

	constructor(props){
		super(props);
		this.state = {
			value : colors.slice(0,1)
		}
		// this.onSubmit = this.onSubmit.bind(this);
	}


	// onSubmit(evt) {
	//     evt.preventDefault()
	//     const value = this.refs.form.getValue()
	//     if (value) {
	//       console.log(value)
	//     }
	//   }

  render() {
    // return (
    //   <form onSubmit={this.onSubmit}>
    //     <t.form.Form ref="form" type={FormSchema} />
    //     <div className="form-group">
    //       <button type="submit" className="btn btn-primary">Save</button>
    //     </div>
    //   </form>
    // )

    return(
    	<div>
	    	<Multiselect 
	    		data={colors}
	    		value={this.state.value}
	    		onChange={value => this.setState({value})} />
    	</div>
    );
  }
}

export default SearchForm;