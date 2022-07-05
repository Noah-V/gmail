import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
import React from 'react'
import './css/Sidebar.css'

function Sidebar() {

    const dispatch = useDispatch();
  return (
    <div className='sidebar'>
        <Button 
            startIcon={<AddIcon fontSize="large"/>} 
            className="sidebar-compose"
            onClick={()=> dispatch(openSendMessage())}
            >
                Compose
        </Button>
        <SidebarOption
            icon={<InboxIcon/>}
            title={"Inbox"}
            number={54}
            selected={true}
        />
        <SidebarOption
            icon={<StarIcon/>}
            title={"Starred"}
            number={54}
        />
        <SidebarOption
            icon={<DraftsIcon/>}
            title={"Drafts"}
            number={54}
        />
        <SidebarOption
            icon={<DeleteIcon/>}
            title={"Deleted"}
            number={54}
        />
    </div>
  )
}

export default Sidebar