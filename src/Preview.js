import React from 'react';
import './Preview.css';

import PreviewCommentCard from './PreviewCommentCard';

export default class Preview extends React.Component {

  render () {
    return (
      <div className='preview left'>
        <PreviewCommentCard />
        {this.props.children}
      </div>
    );
  }
}