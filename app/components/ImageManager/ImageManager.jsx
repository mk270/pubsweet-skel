import React from 'react'
import { FileUploadList } from "@pubsweet/ui";

const imageFieldName = "thefile"; // must match server

const handleUpload = (file) => {
    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:3000/endpoint", true);

    const formData = new FormData();
    formData.append(imageFieldName, file);
    req.send(formData);

    return req
};

// callback once data is uploaded; the internal structure of the argument
// `e' is determined by the behaviour of the FileUploadList code
const doAlert = (e) => {
    console.log(e);
};

const ImageManager = () => (
  <div>

  <FileUploadList 
    buttonText="Choose a file to upload"
    FileComponent={({ file, progress, error, uploaded }) => (
      <div style={{ color: uploaded ? 'black' : 'gray' }}>{file.name}</div>
    )}
    uploadFile={ handleUpload }
    onChange={ doAlert }
  />
  </div>
);

export default ImageManager;
