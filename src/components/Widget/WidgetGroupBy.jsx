import React from 'react';
import { Divider, Header, Segment } from 'semantic-ui-react';
import uuid from 'react-uuid';
import FileCards from '../common/FileCards';

const WidgetGroupBy = (props) => (
  <div>
    {Object.keys(props.fileDetails).map((obj) => (
      <Segment key={uuid()} color='red' textAlign='center' padded>
        <Header color="violet" as='h3'>{obj}</Header>
        <FileCards
          filesDetail={props.sortByName ?
            props.fileDetails[obj].reverse() :
            props.fileDetails[obj]}
        />
        <Divider section />
      </Segment>
    ))}
  </div>
)

export default WidgetGroupBy;