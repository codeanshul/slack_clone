import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import './chat.css';
import Messages from './Messages';
import Chatinput from './Chatinput';
import db from './firebase';

const Chat = ()=>{
    const {roomid} = useParams();

    const [roomdetails,setroomdetails] = useState(null)
    const [roomMessages,setroomMessages] = useState([]);
    useEffect(() =>{
        if(roomid)
        {
            db.collection("rooms").doc(roomid).onSnapshot(snapshot=>(setroomdetails(snapshot.data())))
            db.collection("rooms").doc(roomid).collection("messages").orderBy('timestamp','asc').onSnapshot(snapshot=>(setroomMessages(snapshot.docs.map(doc=>doc.data()))))
        }
    },[roomid])

    // console.log("messages",roomMessages);
    return(
        <>
        <div className="chat">
            
            <div className="chat_header">
                <div className="chat_header_left">
                    <h4 className="chat_channel_name">
                        <strong>
                           #{roomdetails?.name}
                        </strong>
                        <StarBorderIcon/>
                    </h4>
                </div>

                <div className="chat_header_right">
                    <p>
                        <InfoIcon/> Details

                    </p>
                </div>
            </div>
            <div className="chat_messages">
                {roomMessages.map(({message,timestamp,user,userImage})=>(
                    <Messages
                    msg = {message}
                    time = {timestamp}
                    user = {user}
                    user_img = {userImage}
                    />
                ))}
            </div>
            <Chatinput channelname = {roomdetails?.name} channelid = {roomid}/>
        </div>
        </>
    )
}
export default Chat;