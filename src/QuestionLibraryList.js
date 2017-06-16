import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Question from './Question';
import './QuestionLibraryList.css';
import loader from './loader.gif';

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
                this.props.questionLibrary.map((question, key) => {
                  return (
                    <Question
                      addQuestion={this.props.addQuestion}
                      id={question.id}
                      questionIndex={key}
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