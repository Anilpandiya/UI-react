import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import UploadFile from './UploadFile';

const UploadError = (props) => (
        <React.Fragment>
            <Modal.Header>Error</Modal.Header>
            <Modal.Content>
            <Modal.Description>
                {props.error}
            </Modal.Description>
            </Modal.Content>
        </React.Fragment>
)

class UploadFileModal extends Component{
    state = {
        fileError: false,
        error: '',
        uploaded: false
    }
    onFileChangeHandler = (event) => {
        let files = [...event.target.files];
        console.log('is reaching here', this.state.uploaded);
        if(event.target.error){
                this.setState({ fileError: true, error: event.target.error})
        }
        else{
            this.setState(prevState => ({ uploaded: !prevState.uploaded}));
        }
    }
    onCloseUploadHandler = () => {
        this.setState(prevState => ({ uploaded: !prevState.uploaded}));
    }
    render() {
        return (
            <Modal trigger={<Button attached="top" fluid primary>Upload Files</Button>} closeIcon onClose={this.onCloseUploadHandler}>
                {this.state.fileError ? <UploadError error={this.state.error} /> 
                    : <UploadFile fileUploaded={this.state.uploaded} onFileChangeHandler={this.onFileChangeHandler}/>}
            </Modal>
        )
    }
}

export default UploadFileModal;