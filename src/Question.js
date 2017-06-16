import React from 'react';
import {DragSource} from 'react-dnd';
import _get from 'lodash/get';
import _truncate from 'lodash/truncate';
import _upperFirst from 'lodash/upperFirst';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Control from './controls/Control';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import {blue700, grey700} from 'material-ui/styles/colors';
import editQuestion from './editQuestion.png';


const questionSource = {
  beginDrag (props) {
    return {
      id: props.id,
      questionIndex: props.questionIndex
    };
  },
  endDrag (props, monitor) {
    const question = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (question && _get(dropResult, 'newQuestion')) {
      props.addQuestion(question.questionIndex);
    }
  }
};

class Question extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      isEditing: false,
      isPreview: false
    };
  }

  handleEditOpen = () => {
    this.setState({isEditing: true});
  }

  handlePreviewOpen = () => {
    this.setState({isPreview: true});
  }

  handleClose = () => {
    this.setState({
      isEditing: false,
      isPreview: false
    })
  }

  truncateText (text) {
    return _truncate(text, {
      'length': 40,
      'separator': ' '
    });
  }

  render () {
    const {isDragging, connectDragSource} = this.props;
    const actions = [
      <RaisedButton
        label='Close'
        onTouchTap={this.handleClose} />
    ];
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(
      <div className='question-container' style={{opacity}}>
        <ul>
          <li>{this.truncateText(this.props.text)}</li>
          <li>Answer Type: {_upperFirst(this.props.type)}</li>
        </ul>
        <IconButton
          onTouchTap={this.handleEditOpen}
          style={{float: 'right'}}>
          <ModeEdit color={blue700} />
        </IconButton>
        <IconButton
          onTouchTap={this.handlePreviewOpen}
          style={{float: 'right', marginRight: '5px'}}>
          <RemoveRedEye color={grey700} />
        </IconButton>
        <div style={{clear: 'both'}} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.isPreview || this.state.isEditing}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={this.state.isEditing}>
          <div>
            {
              this.state.isEditing ?
                <div style={{height: '700px'}}><img className='edit-image' alt='edit question' src={editQuestion} /></div>
                : <Control
                  label={this.props.text}
                  type={this.props.type} />
            }
          </div>
        </Dialog>
      </div>
    );
  }
}

export default DragSource('question', questionSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Question);