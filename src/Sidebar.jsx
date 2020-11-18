import React, { useEffect, useState } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import './sidebar.css'
import Sidebarop from './Sidebarop';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import AppsIcon from '@material-ui/icons/Apps';
import LayersIcon from '@material-ui/icons/Layers';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';

const Sidebar = ()=>{

    const [channels,setChannels] = useState([]);

    useEffect(()=>{
        db.collection("rooms").onSnapshot((snapshot)=>(
            setChannels(snapshot.docs.map((doc)=>({
                id: doc.id,
                name: doc.data().name
            })))
        ));
    },[]);

    return(
        <>
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h3> Anmol Jha</h3>
                    <h4>
                        <FiberManualRecordIcon/>
                        Anmol Jha
                    </h4>
                </div>
                <CreateIcon/>
            </div>
            <Sidebarop Icon = {InsertCommentIcon} title="Threads"/>
            <Sidebarop Icon = {InboxIcon} title="Mentions and reactions"/>
            <Sidebarop Icon = {BookmarkIcon} title="Saved Items"/>
            <Sidebarop Icon = {WebAssetIcon} title="Channel Browser"/>
            <Sidebarop Icon = {AppsIcon} title="Apps"/>
            <Sidebarop Icon = {LayersIcon} title="File Browser"/>
            <Sidebarop Icon = {ExpandLessIcon} title="Show less"/>
            <hr/>
            <Sidebarop Icon = {ExpandMoreIcon} title="Channels"/>
            <hr/>
            <Sidebarop Icon = {AddIcon} title="Add Channels"/>
            {channels.map(channel=>(
                <Sidebarop title={channel.name} id={channel.id}/>
            ))}
        </div>
        </>
    )
}

export default Sidebar;