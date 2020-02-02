import React from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';
import uuid from 'react-uuid';

const FileCards = (props) => (
  <React.Fragment>
    <Grid container columns={4}>
      {
        props.filesDetail.map(file => (
          <Grid.Column key={uuid()}>
            <Card color='teal'>
              <Card.Content>
                <Card.Header>{file.name}</Card.Header>
                <Card.Meta>
                  <span>{Date(file.lastModified)}</span>
                </Card.Meta>
                <Card.Description>
                  <span>{(file.size / 1024).toFixed(2)} KB</span>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="file" />
                <span>{file.type}</span>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
        )
      }
    </Grid>
  </React.Fragment>

)

export default FileCards;