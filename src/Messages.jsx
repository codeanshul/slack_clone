import React from 'react';
import './messages.css';

function Messages({msg,time,user,user_img}){
    return(
        <>
            <div className="message">
            <img className="user_image" src={user_img} alt={user}/>
            <div className="message_info">
                <h4>
                    <span className="user_name">{user}</span> <span className="message_timestamp">{new Date(time?.toDate()).toUTCString()}</span>
                </h4>
                <p className="msg_content">{msg}</p>
            </div>

            </div>
        </>
    )
}
export default Messages;