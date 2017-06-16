import React from 'react';
import QuestionArea from './QuestionArea';
import EditCard from './EditCard';
import './Edit.css';

export default class Edit extends React.Component {

  static defaultProps = {
    editCards: []
  };

  render () {
    return (
      <div className='edit-container'>
        {
          this.props.editCards.map((card, key) => {
            return (
              <EditCard
                closeCard={this.props.closeCard}                
                isRequired={card.isRequired}
                index={key}
                isRequiredChange={this.props.isRequiredChange}
                label={card.text}
                moveCard={this.props.moveCard}
                questionId={card.id}
                type={card.type}
                key={`card_${key}`} />
            );
          })
        }
        <QuestionArea />
      </div>
    );
  }
}