import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const searchOptions = [
  {
    key: 'Alumni',
    text: 'Alumni',
    value: 'Alumni',
    
  },
  {
    key: 'Intern',
    text: 'Intern',
    value: 'Intern',
  }
]

const DropdownInput = (props) => {
  console.log(props);
  return (
    <Dropdown
      placeholder={props.placeholder}
      fluid
      selection
      value={props.input.value}
      onChange={(param, data) => props.input.onChange(data.value)}
      options={searchOptions}
    />
  );
}
export default DropdownInput;