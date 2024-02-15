import React from 'react'
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

export const CardComponent = (props) => {
  console.log(props)
  return (
    <Card sx={{minWidth: 450,maxWidth: 450,justifyContent:'center',bgcolor:'#E9EBE2', marginBottom:'10px',borderRadius:'5px'}}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: 'red' }}> R </Avatar>
        }
        title={props.post.username}
      />
      <CardMedia
        component="img"
        // height='fit'
        image= {props.post.fileLink}
        alt='something'
        sx={{borderRadius:'5px'}}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {props.post.caption}
        </Typography>
      </CardContent>
    </Card>
  )
}
