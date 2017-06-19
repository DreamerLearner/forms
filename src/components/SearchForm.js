import React, { PureComponent } from 'react';
import t from 'tcomb-form';
// import Select from 'react-select';


const Form = t.form.Form;

//final form 1 object st

//looking for
const LookingFor = t.enums.of([
  'Bride',
  'Groom'
], 'LookingFor');

//marital status
const maritalStatus = t.enums.of([
	'Never Married',
	'Divorced',
	'Widowed',
	'Annulled',
	'Awaiting Divorce'
],'maritalStatus');


//have children checkbox option 1
const haveChildern = t.enums.of([
	'Doesn\'t matter',
	'No',
	'Ok, if not staying together'
],'haveChildern');

const Car = t.enums.of('Audi Chrysler Ford Renault Peugeot');

const options = {
  auto: 'placeholders',
  auto: 'labels',
  order: ['mar_status', 'looking_for', 'marital_status', 'haveChildern', 'age_from', 'age_to', 'email'],
  // order: ['looking_for', 'age_from', 'age_to', 'email', 'tags'],
  help: <p>My form help</p>,
  // template: mytemplate // see Templates section for documentation
  fields: {
  	looking_for:{
  		attrs:{
  			autoFocus: true,
  			placeholder:'Bride or Groom',
  			onFocus: () => {
	          console.log('looking for in focus');
	        },
	        className: 'basic_element'
  		},
  		factory: t.form.Radio
  	},
    mar_status: {
      label: 'Marital status',
      factory: t.form.Select
    },
  	marital_status:{
  		attrs:{
  			placeholder:'Select marital status',
  			onFocus: () => {
	          console.log('marital status in focus');
	        },
	        className: 'basic_element'
  		},
  		nullOption: {value: 'Doesn\'t matter', text: 'Doesn\'t matter'},
  		factory: t.form.Select
  	},
  	age_from:{
  		attrs:{
  			placeholder: 'Please specify min age',
  			onFocus: () => {
	          console.log('age from in focus');
	        },
	        className: 'basic_element'
  		}
  	},
  	age_to:{
  		attrs:{
  			placeholder: 'Please specify max age',
  			onFocus: () => {
	          console.log('age to in focus');
	        },
	        className: 'basic_element'
  		}
  	},
  	email:{
  		label: 'Email id',
  		disabled: true
  	},
  	haveChildern:{
  		template: checkboxTemplate1,
  		factory: t.form.Radio
  	}
  }
};

function checkboxTemplate1(locals) {

	let abc = '';

	locals.options.map( opt => {
		abc = `${abc}<label><input type="checkbox" />${opt.text}</label><span className="spacer"></span>
	        `;
	});

    return (
        <div>
        	{locals.label}
        	<br/>
        	<div dangerouslySetInnerHTML={{__html: abc}} />
	    </div>
    );

}

const BasicSearch = t.struct({
  looking_for: LookingFor,
  marital_status: maritalStatus,
  email: t.maybe(t.String),
  age_from: t.Number,
  age_to: t.Number,
  tags: t.list(t.String),
  haveChildern: haveChildern,
  mar_status: t.list(maritalStatus)
});
//final form 1 object ed


//final form 2 object st
let options2 = Object.assign({}, options);

options2 = {
  order: ['email'],
  label: <p className="search_heads">Location & Grew up in Details</p>,
  disableAdd: false,
  disableRemove: true,
  disableOrder: true
}

const locationSection = t.struct({
  email: t.maybe(t.String)
});

const locationsection = t.list(locationSection); //You can nest lists and structs at an arbitrary level .. add Searches in type & chk

//final form 2 object ed

// this didn't work
// const ageFrom = t.refinement(t.Number, (n) => n > 17});
// const ageTo = t.refinement(t.Number, (n) => n < 72});


class SearchForm extends PureComponent{

	
	render(){
		return(
			<div>
        <form>
  			  <Form
  			    ref="form"
  			    options={options}
  			    type={BasicSearch}
  			  />
          <br />
          <hr style={{border:"2px solid #666"}} />
          <br />
          <Form ref="form"
          options={options2}
          type={locationsection}
          />
        </form>
			</div>
		);
	}
}

export default SearchForm;