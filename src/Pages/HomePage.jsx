import React ,{useEffect, useState, useRef} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CSS/HomePage.css'
import SideBox from '../components/SideBox';
import { Box,Grid } from '@mui/material';
import { CardComponent } from '../components/CardComponent';
import { fetchGet, fetchGet1 } from '../utils/FetchUtils';
import UserBox from '../components/UserBox';

function HomePage() {
  const id = localStorage.getItem("id");
  const [posts, setPosts] = useState([])
  const [postState,setPostState] = useState(false);
  const intitialize = useRef(false);

  useEffect( () => { 
    if(!intitialize.current){
      intitialize.current = true;
    async function fetchData() {
        const dateTime = new Date();
        console.log(dateTime);
        try {
            const res = await fetchGet(`http://localhost:8080/${id}/getposts`); 
            setPosts(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
  }
}, [postState]);
console.log(postState);
  return (
    <>
        <Header></Header>
        <SideBox onUpload = {setPostState}></SideBox>
        <div className='postDiv'>
          <Box sx={{padding:'100px',marginLeft:'-50px'}}>
            {posts.map(function(post,i){
              return <CardComponent post = {post} key={i}></CardComponent>
            })}
          </Box>
        </div>
        {/* <Footer></Footer> */}
        <UserBox></UserBox>
    </>
  )
}

export default HomePage;