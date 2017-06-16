import React from 'react';
import './Preview.css';

import PreviewCommentCard from './PreviewCommentCard';

export default class Preview extends React.Component {

  render () {
    let header;
    if(this.props.showHeader){
      header = <h2 className="previewHeader">Preview</h2>
    } else {
      null
    }
    return (
      <div className='preview left'>
        {header}
        <PreviewCommentCard />
        {this.props.children}
      </div>
    );
  }
}