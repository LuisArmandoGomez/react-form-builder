import React from 'react';
import {DropTarget} from 'react-dnd';

const areaTarget = {
  drop () {
    return {
      newQuestion: true
    };
  }
}

class QuestionArea extends React.Component {

  render () {
    const {canDrop, isOver, connectDropTarget} = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div className='question-area'>
        {
          isActive ?
            <h1>Release Here</h1>
            : <h1>Drop Here</h1>
        }
      </div>
    );
  }
}

export default DropTarget('question', areaTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(QuestionArea);
