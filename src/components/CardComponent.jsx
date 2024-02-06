import React from 'react'
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

export const CardComponent = (props) => {

  return (
    <Card sx={{maxWidth: 500,justifyContent:'center',bgcolor:'gray'}}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: 'red' }}> R </Avatar>
        }
        title="Username"
      />
      <CardMedia
        component="img"
        height="194"
        image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
        alt='something'
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
  )
}
