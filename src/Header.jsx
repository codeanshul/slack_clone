import React from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './header.css'


const Header = ()=>{
    return(
        <>
        <div className="header">
            <div className="header_left">
                <Avatar
                    className="header_avatar"
                    src="https://lh3.googleusercontent.com/proxy/ZKHOq3nDyiFsQJiYT09RKdLMnbxZf_toYMSqsgv4qjM9A9RJCtMy-KJS6nIpgIhOHyBfvGMH6w-_cihrtuLz0peMAJZurH7NjXT8ozxSrOCCnFKVpT8oNUYusPlOpCFuF7q94WMSQv8"
                />
                <AccessTimeIcon/>
            </div>
            <div className="header_search">
                <SearchIcon/>
                <input placeholder="Search" />
            </div>
            <div className="header_right">
                <HelpOutlineIcon/>
            </div>
        </div>
        </>
    )
}
export default Header;