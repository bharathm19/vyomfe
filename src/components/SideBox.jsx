import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { MenuList, Modal } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import '../CSS/SideBox.css'
import CreateModal from '../modals/CreateModal';


function SideBox(props) {
    const [open,setOpen] = useState(false);
    const handleClose = () => {setOpen(false); 
        props.onUpload(true);}
    const handleOpen = () => {setOpen(true); props.onUpload(false);}


  return (
    <div className='v1'>
        <MenuList>
            <MenuItem className='menuItem'>
                <ListItemIcon>
                    <HomeOutlinedIcon></HomeOutlinedIcon>
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem className='menuItem'>
                <ListItemIcon>
                    <SearchOutlinedIcon></SearchOutlinedIcon>
                </ListItemIcon>
                <ListItemText>Search</ListItemText>
            </MenuItem>
            <MenuItem className='menuItem' onClick={handleOpen}>
                <ListItemIcon>
                    <AddBoxOutlinedIcon></AddBoxOutlinedIcon>
                </ListItemIcon>
                <ListItemText>Create</ListItemText>
            </MenuItem>
            <MenuItem className='menuItem'>
                <ListItemIcon>
                    <AccountBoxOutlinedIcon></AccountBoxOutlinedIcon>
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
            </MenuItem>
        </MenuList>
        <CreateModal open={open} close={handleClose}></CreateModal>
    </div>
  )
}

export default SideBox