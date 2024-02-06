import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TextField from '@mui/material/TextField';
import { Button, FormControl, Typography } from '@mui/material';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import { useNavigate } from "react-router-dom";
import '../CSS/LoginPage.css'
import { fetchGet1, fetchPost } from '../utils/FetchUtils';


const defaultValues = {
  userName : "",
  password : "",
}
function LoginPage() {
  const navigate = useNavigate();
  const [formvalues, setFormvalues] = useState(defaultValues);
  const handleSIgninClick = () => {
      navigate('/signin');
  }

  const handleInputChage = (e) => {
    const {name,value} = e.target;
    setFormvalues({
      ...formvalues,
      [name]: value,
    })
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchPost(`http://localhost:8080/login`,formvalues);
    console.log(response.status);
    if(response.status===200){
      try{
        // const loginResponse = await response.json();
        console.log(response.data);
        const id = response.data.id;
        localStorage.setItem("id",response.data.id);
        localStorage.setItem("username",response.data.userName);
        navigate(`/${id}/home`);
      }catch(error){

      }
    }
  }

  return (
    <>
        <Header></Header>
        <div className='formDiv'>
        <form onSubmit={handleLoginSubmit}>
            <FormControl sx={{minWidth:'350px'}}>
                <OfflineBoltIcon sx={{paddingLeft: '40%', paddingBottom:'20px'}} fontSize='large'></OfflineBoltIcon>
                <TextField id='username' variant='standard' name="userName" label='Username' onChange={handleInputChage}></TextField>
                <TextField id='password' variant='standard' name='password' label='Password' type='password' onChange={handleInputChage}></TextField>
                <Button variant='contained' color='success' sx={{marginTop:'15px'}} type='submit'>Submit</Button>
                <div>
                    <Typography sx={{justifyContent:'right',display:'flex'}}>New to vyom?
                    <Typography onClick={handleSIgninClick} sx={{justifyContent:'right',display:'flex',marginLeft:'5px',color:'rgba(0, 0, 255, 0.71)', cursor:'pointer'}}>Sign in</Typography>
                    </Typography> 
                </div>
            </FormControl>
          </form>
        </div>
        <Footer></Footer>
    </>
  )
}

export default LoginPage