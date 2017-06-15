import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Edit from './Edit';
import CommentCardList from './CommentCardList';
import Preview from './Preview';
import QuestionLibraryList from './QuestionLibraryList';
import './Container.css';

const domains = [
  'aaa', 'aab', 'aaaaa', 'aaaaaaaam', 'baz', 'foo', 'bar', 'feshong', 'superman', 'batman', 'zzz', 'zztop', 'aquaman'
];

export default class Container extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      domain: '',
      mode: 'edit'
    };
  }
  
  handleOnDomainSelect = (val) => {
    console.log(val);
    this.setState({domain: val});
  }

  render () {
    return (
      <div className='container'>
        <div className='container-header'>
          <AutoComplete
            dataSource={domains}
            id='domain-auto'
            onNewRequest={this.handleOnDomainSelect}
            placeholder='Type to filter domains'
            style={{display: 'block'}} />
        {
          this.state.mode === 'edit' ?
            <div>
              <QuestionLibraryList />
              <Edit />
              <Preview />
            </div>
            : <div>
              {
                this.state.domain ?
                  <div>
                    <CommentCardList />
                    <Preview />
                  </div> : null
              }
            </div>
        }
        </div>
      </div>
    );
  }
}