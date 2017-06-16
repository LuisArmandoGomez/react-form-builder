import React from 'react';
import TextInput from './TextInput';

export default class Control extends React.Component {

  render () {
    let control = null;

    if (this.props.type === 'text') {
      control = (
        <div className='control'>
          {
            this.props.preview ? <h3>Text Field Preview</h3> : null
          }
          <TextInput label={this.props.label} />
        </div>
      );
    }

    return control;
  }
}
