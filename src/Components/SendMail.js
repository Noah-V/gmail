import React from 'react';
import './css/SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form'; 
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice.js';
import { db } from './Firebase.js';
import firebase from 'firebase/compat/app';
import { collection, addDoc } from "firebase/firestore"; 
import { serverTimestamp } from 'firebase/firestore';

function SendMail() {

    const {register, handleSubmit, setError, watch, formState:{ errors } } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
        addtoFirestore(formData)

        dispatch(closeSendMessage());
    };
    
    async function addtoFirestore(formData){
        await addDoc(collection(db, "emails"), {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: serverTimestamp(),
        })
    }

    const dispatch = useDispatch();

  return (
    <div className='sendMail'>
        <div className="sendMail-header">
            <h3>New Message</h3>
            <CloseIcon className='sendMail-close' onClick={()=> dispatch(closeSendMessage())}/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <input 
                placeholder='to'
                type="email"
                {...register("to", {required: "This is required"})}
            />
            <p className='sendMail-error'><ErrorMessage errors={errors} name="to" /></p>
            


            <input 
                placeholder='Subject'
                type="text"
                {...register("subject", {required: "Subject is required"})}
            />
            <p className='sendMail-error'><ErrorMessage errors={errors} name="subject" /></p>
            

            <input 
                type="text"
                placeholder='message'
                className='sendMail-message' 
                {...register("message", {required: "message is required"})}
                 
            />
            <p className='sendMail-error'><ErrorMessage errors={errors} name="message" /></p>

            <div className="sendMail-options">
                <Button 
                    variant="contained"
                    color="primary"
                    type="submit"
                    className='sendMail-send'>Send
                </Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail