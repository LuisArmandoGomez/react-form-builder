import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Question from './Question';
import './QuestionLibraryList.css';
import loader from './loader.gif';

const questionLibrary = [
  {
    id: 1,
    type: 'text',
    text: 'If you experienced a technical issue please enter your order number'
  },
  {
    id: 2,
    type: 'text',
    text: 'Please enter the location or number of the store you visited'
  },
  {
    id: 3,
    type: 'text',
    text: 'Please enter the store location'
  }
];

export default class QuestionLibraryList extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000);
  }

  render () {
    return (
      <div className='question-library-list'>
        {
          this.state.isLoading ?
            <div className='loader-container'>
              <img alt='loader' src={loader} />
            </div>
            : <div>
              <div className='question-add-container'>
                <RaisedButton
                  icon={<ContentAdd />}
                  label='Add a Question'>
                </RaisedButton>
              </div>
              {
                questionLibrary.map((question, key) => {
                  return (
                    <Question
                      options={question.options}
                      text={question.text}
                      type={question.type}
                      key={`question_${key}`} />
                  );
                })
              }
            </div>
        }
      </div>
    );
  }
}