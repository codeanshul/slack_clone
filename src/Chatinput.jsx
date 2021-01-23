import React, { useState } from 'react';
import db from './firebase';
import {useStateValue} from './StateProvider';
import firebase from 'firebase';
import './chatinput.css'

const Chatinput = ({channelname,channelid})=>{
    const [input,setInput] = useState('');
    const [ {user} ] = useStateValue();

    const sendMessages = (e)=>{
        e.preventDefault();
        if(channelid){
            db.collection('rooms').doc(channelid).collection('messages').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userImage: user.photoURL,

        });
    }
    setInput("");
    }
    return(
        <>
        <div className="chat_input">
        <form>
            <input 
            value = {input}
            onChange = {e=>(setInput(e.target.value))}
            placeholder="Start conversation">
            </input>
            <button type="submit" onClick={sendMessages}>
            </button>
        </form>
        </div>
        </>
    )
}
export default Chatinput;