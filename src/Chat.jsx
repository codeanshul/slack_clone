import React from 'react';
import { useParams } from 'react-router-dom';
import './chat.css';

const Chat = ()=>{
    const {roomid} = useParams();
    return(
        <>
        <div className="chat">
            <h4> We are in {roomid} room</h4>
        </div>
        </>
    )
}
export default Chat;