/* eslint-disable no-extend-native */
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import WidgetGroupBy from './WidgetGroupBy';
import FileCards from '../common/FileCards';

class Widget extends Component {
  state = {
    groupByType: false,
    sortByName: false
  }

  fileDetailsByType = () => {
    Array.prototype.groupBy = function (prop) {
      return this.reduce(function (groups, item) {
        const val = item[prop];
        groups[val] = groups[val] || [];
        groups[val].push(item);
        return groups;
      }, {})
    };
    const groupByType = this.props.filesDetail.groupBy('type');
    return groupByType;
  }

  groupByTypeHandler = () => {
    this.setState((prevState) => ({ groupByType: !prevState.groupByType }))
  }

  sortByNameHandler = () => {
    this.setState((prevState) => ({ sortByName: !prevState.sortByName }))
  }

  getFileDetails = () => {
    if (this.state.sortByName) {
      return this.props.filesDetail.reverse()
    }
    return this.props.filesDetail;
  }

  render() {
    return (
      <div className='grid'>
        {this.props.filesDetail.length > 0 ?
          <React.Fragment>
            <div className="groupBy">
              <Button toggle active={this.state.groupByType} onClick={this.groupByTypeHandler}>
                Group Files by type/extension
              </Button>

              <Button
                toggle floated="right"
                active={this.state.sortByName} animated='vertical'
                onClick={this.sortByNameHandler}
              >
                <Button.Content visible>Sort Files by Name</Button.Content>
                <Button.Content hidden>ascending/descending</Button.Content>
              </Button>

            </div>
            <div>
              {!this.state.groupByType ?
                <FileCards
                  filesDetail={this.getFileDetails()}
                  className='cards' />
                :
                <WidgetGroupBy
                  fileDetails={this.fileDetailsByType()}
                  sortByName={this.state.sortByName}
                />
              }
            </div>
          </React.Fragment>
          : ''
        }

      </div>
    )
  }
}

export default Widget;