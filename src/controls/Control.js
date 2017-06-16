import React from 'react';
import TextInput from './TextInput';

export default class Control extends React.Component {

  render () {
    let control = null;

    if (this.props.type === 'text') {
      control = (
        <div className='control'>
          <h3>Text Field Preview</h3>
          <TextInput label={this.props.label} />
        </div>
      );
    }

    return control;
  }
}
