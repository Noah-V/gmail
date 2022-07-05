import React, { useEffect, useState } from 'react'
import './css/EmailList.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import { collection, doc, getDoc, query, getDocs, orderBy } from 'firebase/firestore';
import { db } from './Firebase';
import { onSnapshot } from 'firebase/firestore';


function EmailList() {

    const [emails, setEmails] = React.useState([]);

    React.useEffect(()=> {
        getEmails()
    }, [])

    async function getEmails(){
        const emailsRef = collection(db, "emails");//getting the emails collection

        const q = query(emailsRef, orderBy("timestamp", "desc")); //querying the collection emails

        const querySnapshot = await getDocs(q);//getting the result of the collection
        setEmails(
            querySnapshot.docs.map((doc)=>({
                id: doc.id,
                data: doc.data()
            }))
        )
    }
  return (
    <div className='emailList'>
        <div className="emailList-settings">
            <div className="emailList-settings-left">
                <CheckBoxOutlineBlankIcon/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className="emailList-settings-right">
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </div>
        </div>
        <div className="emailList-sections">
            <Section icon={<InboxIcon/>} title='Primary' color='red' selected/>
            <Section icon={<PeopleIcon/>} title='Social' color='#1A73E8' />
            <Section icon={<LocalOfferIcon/>} title='Promotions' color='green' />
        </div>
        <div className="emailList-list">
            {emails.map(email => (
                <EmailRow
                    key={email.id}
                    id={email.id}
                    title={email.data.to}
                    subject={email.data.subject}
                    message={email.data.message}
                    time={new Date(email.data.timestamp?.seconds * 1000).toUTCString()}
                />
            ))}
        </div>
    </div>
  )
}

export default EmailList