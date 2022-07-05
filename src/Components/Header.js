import React from 'react'
import './css/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from './Firebase';
import { getAuth, signOut } from "firebase/auth";

function Header() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const onSignOut = ()=> {
    signOut(auth).then(()=> {
      dispatch(logout());
    });
  }
  
  return (
    <div className='header'>
        <div className="header-left">
          <IconButton>
            <MenuIcon/>
          </IconButton>
          <img src={require('../images/newgmaillogo.jpg')} alt="" />
        </div>
        <div className="header-middle">
          <SearchIcon/>
          <input type="text" name="" placeholder='Search mail' id="" />
          <ArrowDropDownIcon className="header-inputCaret"/>
        </div>
        <div className="header-right">
          <IconButton>
            <AppsIcon/>
          </IconButton>
          <IconButton>
            <NotificationsIcon/>
          </IconButton>
          <IconButton>
            <Avatar src={user?.photoUrl} onClick={onSignOut}/>
          </IconButton>
        </div>
    </div>
  )
}

export default Header;