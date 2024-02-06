import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CSS/HomePage.css'
import SideBox from '../components/SideBox';
import { Box,Grid } from '@mui/material';
import { CardComponent } from '../components/CardComponent';

function HomePage() {
  return (
    <>
        <Header></Header>
        <SideBox></SideBox>
        <div style={{display:'flex', justifyContent:'center', marginLeft:'80px'}}>
          <Box sx={{padding:'100px'}}>
            <CardComponent></CardComponent>
          </Box>
        </div>
        <Footer></Footer>
    </>
  )
}

export default HomePage;