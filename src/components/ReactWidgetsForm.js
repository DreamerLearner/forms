import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
// import 'react-widgets/dist/css/react-widgets.css'


const colors = [ { color: 'Red', value: 'ff0000' },
  { color: 'Green', value: '00ff00' },
  { color: 'Blue', value: '0000ff' } ];

const maritalStatus = ['Doesn\'t matter', 'Never Married', 'Divorced', 'Widowed', 'Annulled', 'Awaiting Divorce'];
const LookingFor = ['Bride','Groom'];

const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />

const renderMultiselect = ({ input, data, valueField, textField }) =>
  <Multiselect {...input}
    onBlur={() => input.onBlur()}
    value={input.value || []} // requires value to be an array
    data={data}
    valueField={valueField}
    textField={textField}
  />

const renderSelectList = ({ input, data }) =>
  <SelectList {...input}
    onBlur={() => input.onBlur()}
    data={data} />

const renderRadioOptions = ({input, data}) => {
  let radioHtml = '';
  data.map( option => {
    radioHtml = `${radioHtml}<label><input name=${input.name} type="radio" value=${option} />${option}</label>`
  });

  return <div dangerouslySetInnerHTML={{__html: radioHtml}} />; 
}

let ReactWidgetsForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Looking For</label>
        <Field
          name="LookingFor"
          component={renderRadioOptions}
          data={LookingFor}/>        
      </div>
      <div>
        <label>Marital Status</label>
        <Field
          name="hobbies"
          component={renderMultiselect}
          data={maritalStatus}/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values
        </button>
      </div>
    </form>
  )
}

ReactWidgetsForm = reduxForm({
  form: 'reactWidgets'  // a unique identifier for this form
})(ReactWidgetsForm)

export default ReactWidgetsForm