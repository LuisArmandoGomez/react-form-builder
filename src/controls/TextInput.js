import React from 'react';
import TextField from 'material-ui/TextField';

export default class TextInput extends React.Component {

  render () {
    return (
      <div>
        <label className='label'>{this.props.label}</label>
        <input
          className='text-input'
          type='text' />
      </div>
    );
  }
}
