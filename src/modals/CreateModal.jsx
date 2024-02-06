import React , { useRef, useState }from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button, FormControl, Input, TextField, Typography } from '@mui/material';
import AWS from 'aws-sdk';
import { fetchGet1, fetchPut } from '../utils/FetchUtils';
import {useParams} from 'react-router-dom';

const defaultValues = {
  caption: "",
  fileLink: "",
}
const CreateModal = (props) => {
  const FormTemp = useRef();
  const [file,setFile] = useState(null);
  const [fileLink, setFileLink] = useState("");
  const [formvalues, setFormvalues] = useState(defaultValues);
  const [caption, setCaption] = useState("");
  const [close,setClose] = useState(true);
  const id = useParams();
  console.log(id);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '52.7%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleImageChange = (e) => {
    if(e.target.files[0]){
      const mediaFile = e.target.files[0];
      setFile(mediaFile);
    }
  }

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  }
  
  const handleSubmit = async (e) => {
    await upload();
    setFormvalues({
      ...formvalues,
      caption: caption,
      fileLink: fileLink,
    });
    const response = await fetchPut(`http://localhost:8080/${id}/upload`,formvalues);
    console.log(response);
    setFile(null);
    setClose(false);
  }

  const upload = async () => {
    const S3_BUCKET = 'vyommediaposts';
    const REGION = 'us-east-1';
  

  AWS.config.update({
    accessKeyId: "AKIA4MTWKBLRRNVXPWRW",
    secretAccessKey: "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"
  });

  const s3 = new AWS.S3({
    params:{ Bucket: S3_BUCKET},
    region: REGION,
  });

  const pros = {
    Bucket: S3_BUCKET,
    Key: file.name,
    Body: file,
  };

  const upload = s3
      .putObject(pros)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

      const resp = await upload.then((err, data) => {
        console.log(JSON.stringify(err));
        setFileLink("https://vyommediaposts.s3.amazonaws.com/"+file.name);
        console.log(fileLink);
      });
      
}
  return (
    <div>
        <Modal
            open = {props.open}
            onClose={props.close || close}
        >
          <Box sx={style}>
            <form>
              <FormControl ref={FormTemp}>
                <Input
                      accept='image/*'
                      className='imagePost'
                      id='postImage'
                      type='file'
                      name='mediaPost'
                      onChange={handleImageChange}
                    />
                  <TextField id='caption' name='caption' label='Caption' onChange={handleCaptionChange}></TextField>
                <Button variant='contained' color='success' onClick={handleSubmit}>Upload</Button>
              </FormControl>
            </form>
            {fileLink && <img src={fileLink} alt='ig'/>}
          </Box>
        </Modal>
    </div>
  )
}

export default CreateModal;