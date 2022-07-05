import React from 'react'
import './css/EmailRow.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useNavigate } from "react-router-dom";
import { selectMail } from '../features/mailSlice';
import { useDispatch } from 'react-redux';

function EmailRow({id, title, subject, message, time}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openMail = () => {
        dispatch(selectMail({id, title, subject, message, time}));
        navigate("/mail");
    }
    
  return (
    <div onClick={openMail} className='emailRow'>
        <div className="emailRow-options">
            <CheckBoxOutlineBlankIcon/>
            <IconButton>
                <StarBorderIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantIcon/>
            </IconButton>
        </div>
        <div className="emailRow-title">{title}</div>
        <div className="emailRow-message">
            <h4>{subject}{" " }
                <span className="emailRow-description">-{message}</span>
            </h4>
        </div>
        <p className="emailRow-time">{time}</p>
    </div>
  )
}

export default EmailRow