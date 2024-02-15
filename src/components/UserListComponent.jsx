import React from "react";
import { Avatar, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { fetchPut } from "../utils/FetchUtils";


export const UserListComponent = (props) => {
    const handleFollowClick = async (e) => {
        const id = localStorage.getItem('id');
        console.log(props.user.id)
        const response = await fetchPut(`http://localhost:8080/${id}/followrequest`,{userId:props.user.id}).then(
            props.onFollow(true)
        );
        console.log(response);
    }
    return (
        <Card sx={{width:'250px',marginBottom:'10px',display:'flex'}}>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Avatar sx={{marginTop:'8px', marginLeft:'5px'}}>R</Avatar>
                </Grid>
                <Grid item xs={4}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.user.userName}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={4}>
                    <Button sx={{marginTop:'8px'}} onClick={handleFollowClick}>Follow</Button>
                </Grid>
            </Grid>
        </Card>
      )
}
