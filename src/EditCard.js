import React from 'react';
import _upperFirst from 'lodash/upperFirst';
import Checkbox from 'material-ui/Checkbox';
import {findDOMNode} from 'react-dom';
import {DragSource, DropTarget} from 'react-dnd';

const cardSource = {
  beginDrag (props) {
    return {
      id: props.questionId,
      index: props.index
    };
  }
};

const cardTarget = {
  hover (props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === undefined || dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.moveCard(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

class EditCard extends React.Component {

  isRequiredChange = (e, val) => {
    this.props.isRequiredChange(val, this.props.index);
  }

  render () {
    const {isDragging, connectDragSource, connectDropTarget} = this.props;

    return connectDragSource(connectDropTarget(
      <div className='edit-card'>
        <ul className='card-details'>
          <li>
            <div className='card-id'>
              <span className='card-label'>Question ID: </span>{this.props.questionId}
            </div>
            <div className='card-type'>
              <span className='card-label'>Type: </span>{_upperFirst(this.props.type)}
            </div>
          </li>
          <li>
            <div>
              <span className='card-label'>Label: </span>{this.props.label}
            </div>
          </li>
          <li>
            <div className='card-checkbox'>
              <Checkbox
                checked={this.props.isRequired}
                label='Is Required'
                onCheck={this.isRequiredChange}
                style={{width: '150px'}}
                value={this.props.isRequired} />
            </div>
          </li>
        </ul>
      </div>
    ));
  }
}

export default DragSource('feshong', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(DropTarget('feshong', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(EditCard));
