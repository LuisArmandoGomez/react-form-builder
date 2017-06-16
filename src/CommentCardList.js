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
          <div key={index} className="comment-card-list-item">
            <p className="template-name">{template.name}</p>
            <p className="template-desc">{template.Description}</p>
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
      <div className="col-xs-12 col-md-6 comment-card-list">
        <h2>Templates</h2>
        <div className="templates-wrapper">
          {templates}
        </div>
      </div>
    );
  }
}