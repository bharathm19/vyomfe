import React , { useRef, useState }from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button, FormControl, Input, TextField } from '@mui/material';
import AWS from 'aws-sdk';
import { fetchPut } from '../utils/FetchUtils';

const CreateModal = (props) => {
  const FormTemp = useRef();
  const [mediaFileLink, setMediaFileLink] = useState("");
  const [caption, setCaption] = useState("");
  const [close,setClose] = useState(false);
  const id = localStorage.getItem('id');

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

  const handleImageChange = async (e) => {
    e.preventDefault();
    if(e.target.files[0]){
      const mediaFile = e.target.files[0];
      await upload(mediaFile);
      setClose(true);
    }
  }

  const handleCaptionChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setCaption(value);
    console.log(caption);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().getTime()
    const response = await fetchPut(`http://localhost:8080/${id}/upload`,{caption: caption, fileLink: mediaFileLink,date: date});
    console.log(response);
    setClose(false);
  }

  const upload = async (mediaFile) => {
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
    Key: mediaFile.name,
    Body: mediaFile,
  };

  const upload = s3
      .putObject(pros)
      .on("httpUploadProgress", (evt) => {
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

      const resp = await upload.then((err, data) => {
        console.log(JSON.stringify(err));
        setMediaFileLink("https://vyommediaposts.s3.amazonaws.com/"+mediaFile.name);
      });
      
}
  return (
    <div>
        <Modal
            open = {props.open || close}
            onClose={props.close}
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
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
                <Button variant='contained' color='success' type='submit'>Upload</Button>
              </FormControl>
            </form>
            {mediaFileLink && <img src={mediaFileLink} alt='ig'/>}
          </Box>
        </Modal>
    </div>
  )
}

export default CreateModal;