import React from 'react'
import { Grid, Card, Icon } from 'semantic-ui-react';

const Cards = (props) => (
    <React.Fragment>
    {
        props.filesDetail ? props.filesDetail.map(file => (
            <Grid.Column>
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
        ) : ''
    }
    </React.Fragment>
    
)

const Widget = (props) => (
    <div className='grid'>
    <Grid container columns={4}>
        <Cards {...props} className='cards' /> 
    </Grid>
    </div>
)

export default Widget;