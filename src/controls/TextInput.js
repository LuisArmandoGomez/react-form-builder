import React from 'react';
import TextField from 'material-ui/TextField';

export default class TextInput extends React.Component {

  render () {
    const isRequired = this.props.isRequired ? <span className='required'> (*)</span> : null;

    return (
      <div>
        <label className='label'>{this.props.label}{isRequired}</label>
        <input
          className='text-input'
          type='text' />
      </div>
    );
  }
}
