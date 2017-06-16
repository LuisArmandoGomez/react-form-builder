import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Edit from './Edit';
import CommentCardList from './CommentCardList';
import Preview from './Preview';
import QuestionLibraryList from './QuestionLibraryList';
import './Container.css';
import _find from 'lodash/find';

const domains = [
  'www.kohls.com', 'store.mobile.kohls.com', 'store.kohls.com', 'emails.kohls.com'
];

const listData = [
  {
    id: 'www.kohls.com', 
    cards: [
      {name: 'Desktop Check Out', ID:70783, Description: 'Default Card(changed 6/18/2015 2:17:41 PM)'},
      {name: 'Desktop Default', ID:70786, Description: 'Default Card(changed 6/18/2015 2:18:11 PM)'},
      {name: 'Desktop Default', ID:70604, Description: 'Default Card(changed 6/18/2015 2:17:38 PM)'},
      {name: 'Opt-In Card Training', ID:60763, Description: 'Default Card(changed 9/24/2014 10:43:36 AM)'}
    ]
  },
  {
    id: 'store.mobile.kohls.com',
    cards: [
      {name: 'Default', ID: 70339, Description: 'Default Card(changed 6/15/2015 2:33:16 PM)'},
      {name: 'Tablet Responsive from mobile.kohls.com', ID: 70696, Description: 'As of 8/27/14(changed 7/27/2015 10:13:03 AM)'},
      {name: 'Waypoint Mobile Optimized Store from mobile.kohls.com', ID: 71868, Description: 'As of 8/27/14'}
    ]
  },
  {
    id: 'store.kohls.com',
    cards: [
      {name: 'Default', ID: 70337, Description: 'Default Card(changed 6/15/2015 2:32:59 PM)', parent_id: 'store.kohls.com'},
      {name: 'Desktop Default from www.kohls.com ', ID: 70693, Description: 'Default Card(changed 7/27/2015 10:12:40 AM)', parent_id: 'store.kohls.com'},
      {name: 'Waypoint Desktop Store from www.kohls.com ', ID: 71865, Description: 'Default Card(changed 7/28/2015 10:30:30 AM)', parent_id: 'store.kohls.com'},
      {name: 'Waypoint Desktop Store- Q1 ', ID: 70337, Description: 'Default Card(changed 10/30/2015 9:42:12 AM)'},
      {name: 'Waypoint Desktop Store- Q1 Mobile Responsive Template', ID: 70337, Description: 'Default Card(changed 7/28/2015 10:30:40 AM)', parent_id: 'store.kohls.com'},
    ]
  },
  {
    id: 'emails.kohls.com',
    cards: [
      {name: 'Default', ID: 70337, Description: 'Default Card'},
      {name: 'BOPUS - Mobile Optimized Order Abandon ', ID: 70337, Description: 'n/a'},
      {name: 'BOPUS - Mobile Optimized Order Confirm ', ID: 70337, Description: 'n/a'},
      {name: 'BOPUS Kohls Order Cancel ', ID: 70337, Description: 'Store ID/Number question'},
      {name: 'Narvar', ID: 70337, Description: 'n/a'},
    ]
  }

]

export default class Container extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      domain: '',
      mode: ''
    };
  }
  
  handleOnDomainSelect = (val) => {
    console.log(val);
    let domainTemplateList = _find(listData, {'id': val });
    this.setState({
      domain: val, 
      mode: '',
      domainTemplateList: domainTemplateList
    })
  }

  handleEditOpen = (val) => {
    if(val){
      console.log('triggering', val)
      this.setState({
        mode: 'edit'
      })
    }
  }

  render () {
    return (
      <div className='container-wrapper'>
        <div className='container-header'>
          <AutoComplete
            dataSource={domains}
            id='domain-auto'
            onNewRequest={this.handleOnDomainSelect}
            placeholder='Type to filter domains'
            style={{display: 'block'}} />
        </div>
        {
          this.state.mode === 'edit' ?
            <div>
              <QuestionLibraryList />
              <div className='container-right-column'>
                <Edit />
                <Preview />
              </div>
              <div style={{clear: 'both'}} />
            </div>
            : <div>
              {
                this.state.domain ?
                  <div>
                    <CommentCardList templates={this.state.domainTemplateList.cards} handleEditOpen={this.handleEditOpen.bind(this)} />
                    <Preview>
                      <p>hellow</p>
                      <p>helloe</p>
                    </Preview>
                  </div> : null
              }
            </div>
        }
      </div>
    );
  }
}