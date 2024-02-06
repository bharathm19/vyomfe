import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TextField from '@mui/material/TextField';
import { Box, Button, FormControl, Typography } from '@mui/material';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import {fetchPost} from '../utils/FetchUtils';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import '../CSS/LoginPage.css'


const defaultValues = {
    fullName:"",
    email:"",
    userName:"",
    password:"",
}

const SigninPage = () => {
    const FormTemp = useRef();
    const [formValues, setFormValues] = useState(defaultValues);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState("");
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    async function handleSignInSubmit(e){
        e.preventDefault();
        if(formValues.fullName==="" || formValues.email==="" || formValues.userName==="" || formValues.password===""){
            setError("Please Fill all the fields");
            setTimeout(() => {
                setError("");
            },1200)
        }else{
            setLoading("loading");
            const response = await fetchPost(`http://localhost:8080/signup`,formValues);
            console.log(response);
            if(response.data){
                setFormValues(defaultValues);
                setSuccess("Registration Successfull");
                setTimeout(() => {
                    setSuccess("");
                    setLoading("");
                    navigate('/login');
                },1200)
            }else{
                setLoading("");
                setError("Username already exists");
                setTimeout(() => {
                    setError("");
                },2000);
            }
        }
     }
  return (
    <>
        <Header></Header>
        <div className='formDiv'>
            <form onSubmit={handleSignInSubmit}>
            <FormControl style={{minWidth:'350px'}} ref={FormTemp}>
                <OfflineBoltIcon sx={{paddingLeft: '40%', paddingBottom:'20px'}} fontSize='large'></OfflineBoltIcon>
                <TextField required id='fullname-input' name="fullName" variant='standard' label='Full Name' value={formValues.fullName} onChange={handleInputChange}></TextField>
                <TextField required id='email-input' name='email' variant='standard' label='Email' type='email' onChange={handleInputChange} value={formValues.email}></TextField>
                <TextField required id='username-input' name='userName' variant='standard' label='Username' onChange={handleInputChange} value={formValues.userName}></TextField>
                <TextField required id='password-input' name='password' variant='standard' label='Password' type='password' onChange={handleInputChange} value={formValues.password}></TextField>
                <LoadingButton loading={loading} loadingPosition="start" variant='contained' color='success' sx={{marginTop:'15px'}} type='submit'>Sign In</LoadingButton>
                <div>
                    <Typography sx={{justifyContent:'right',display:'flex'}}>Already a user?
                    <Typography onClick={handleLoginClick} sx={{justifyContent:'right',display:'flex',marginLeft:'5px', color:'rgba(0, 0, 255, 0.71)',cursor:'pointer'}}>Login</Typography>
                    </Typography>
                </div>
                <div>
                    {error !== "" && (
                        <Alert severity='error'>{error}</Alert>
                    )}
                </div>
                <div>
                    {success !== "" && (
                        <Alert>{success}</Alert>
                    )}
                </div>
            </FormControl>
            </form>
        </div>
        <Footer></Footer>
    </>
  )
}

export default SigninPage