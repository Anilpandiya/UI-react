import React from 'react';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';

const UploadFile  = (props) => (
        <React.Fragment>
            <Modal.Header>Upload Files</Modal.Header>
            <Modal.Content>
                <div className="file-container">
                    { props.fileUploaded ?
                        <Header color="green">
                            <span>
                                Files are uploaded successfully.
                                <Icon name="thumbs up"></Icon>
                            </span>
                        </Header>
                    :
                    <>
                        <Header disabled>Drag and drop file here.....</Header>
                        <Button disabled primary>Choose file</Button>
                        <input 
                            id="file-upload"
                            className="default-file-upload"
                            type="file"
                            onChange={props.onFileChangeHandler}
                            multiple
                            title=" "
                            accept=".pdf, image/*, audio/*, video/*, .doc, .docx, .xml, .xlsx"
                        />
                    </>
                    }
                </div>
        </Modal.Content>
        </React.Fragment>
        
) 

export default UploadFile;