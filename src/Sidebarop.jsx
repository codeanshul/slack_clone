import React from 'react'
import './sidebarop.css'
import db from './firebase';
import {useHistory} from 'react-router-dom';
function Sidebarop({Icon,title,id,addchannelOption})
{
    const history = useHistory();
    const selectchannel = ()=>{
        if(id)
        {
            history.push(`/rooms/${id}`);
        }
        else{
            history.push(title);
        }
    }

    const addchannel = () =>
    {
        const c_name = prompt('Please Enter the name of your Channel');
        if(c_name)
        {
            db.collection('rooms').add({
                name:c_name
            })
        }
    }
    return(
        <div className="sidebar_option" onClick={addchannelOption? addchannel : selectchannel}>
            {Icon && <Icon className="sidebarop_icon"/>}
            {Icon ? <h3>{title}</h3> : <h3 className="sidebarop_channel"><span className="sidebarop_hash">#</span>{title}</h3>}
        </div>
    )
}
export default Sidebarop;