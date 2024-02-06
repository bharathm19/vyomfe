import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TextsmsIcon from '@mui/icons-material/Textsms';
import '../CSS/Header.css';

function Header() {
  return (
    <div className='mainHeader'>
        <h2 className='header'>Vyom</h2>
        <div className='notification'><NotificationsNoneIcon></NotificationsNoneIcon></div>
        <div className='message'><TextsmsIcon></TextsmsIcon></div>
    </div>
  )
}

export default Header