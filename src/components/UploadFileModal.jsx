import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import UploadFile from './UploadFile';
import Widget from './Widget';
import { addFilesCard } from '../store/actions';

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
    var files = [...event.target.files];
    console.log('filoes',files);

    if(event.target.error){
            this.setState({ fileError: true, error: event.target.error})
    }
    else{
      this.props.addNewFileCard(files);
        this.setState(prevState => ({ uploaded: !prevState.uploaded}));
    }
  }

  onCloseUploadHandler = () => {
    this.setState(prevState => ({ uploaded: !prevState.uploaded}));
  }

  render() {
    return (
        <React.Fragment>
            <Modal trigger={<Button attached="bottom" fluid primary>Upload Files</Button>} closeIcon onClose={this.onCloseUploadHandler}>
                {this.state.fileError ? <UploadError error={this.state.error} /> 
                    : <UploadFile fileUploaded={this.state.uploaded} onFileChangeHandler={this.onFileChangeHandler} />}
            </Modal>
            <Widget filesDetail={this.props.updatedFiles}/>
        </React.Fragment>
    )
}

}

const mapStateToProps = (state) => ({ updatedFiles : state });

const mapDispatchToProps = (dispatch) => {

  return ({
  addNewFileCard(files){
    dispatch(addFilesCard(files));
  }
})}

const ConnectedUploadFileModal = connect(mapStateToProps, mapDispatchToProps)(UploadFileModal);

export default ConnectedUploadFileModal;