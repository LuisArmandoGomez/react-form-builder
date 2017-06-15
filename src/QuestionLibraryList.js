import React from 'react';
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
              <h1>Loaded!</h1>
            </div>
        }
      </div>
    );
  }
}