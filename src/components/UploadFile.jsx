import React from 'react'

const UploadFile  = () => (
    <div className="file-container">
            <input 
              id="file-upload"
              className="default-file-upload"
              type="file"
            />
            <div>Drag and drop file here..<br /><p>or</p></div>
            <div className="custom-file-upload">
                choose file
            </div>
        </div>
) 

export default UploadFile;