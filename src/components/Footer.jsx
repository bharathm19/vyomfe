import React from 'react';
import '../CSS/Footer.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

function Footer() {
  return (
    <div className='mainFooter'>
        <ButtonGroup className='buttonGroup' variant='text' style={{padding:'25px'}} size="large">
            <Button><HomeOutlinedIcon></HomeOutlinedIcon></Button>
            <Button><SearchOutlinedIcon></SearchOutlinedIcon></Button>
            <Button><AddBoxOutlinedIcon></AddBoxOutlinedIcon></Button>
            <Button><AccountBoxOutlinedIcon></AccountBoxOutlinedIcon></Button>
        </ButtonGroup>
    </div>
  )
}

export default Footer