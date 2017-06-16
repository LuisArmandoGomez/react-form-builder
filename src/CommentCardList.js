import React from 'react';
import './CommentCardList.css'

import {IconButton} from 'material-ui';

import {blue700, grey700} from 'material-ui/styles/colors';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

export default class CommentCardList extends React.Component {


  render () {
    let templates
    if(this.props.templates){
       templates = this.props.templates.map((template, index) => {
        return (
          <div key={index} className="template-list">
            <p>{template.name}</p>
            <p>{template.ID}</p>
            <p>{template.Description}</p>
            <IconButton
              onTouchTap={() => {
                this.props.handleEditOpen(template.parent_id)
              }}
              style={{float: 'right'}}>
              <ModeEdit color={blue700} />
            </IconButton>
          </div>
        )
      });
    } else {
      templates = null;
    }
    return(
      <div className="comment-card-list">
        {templates}
      </div>
    );
  }
}