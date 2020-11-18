import React from 'react'
import './sidebarop.css'

function Sidebarop({Icon,title})
{
    return(
        <div className="sidebar_option">
            {Icon && <Icon className="sidebarop_icon"/>}
            {Icon ? <h3>{title}</h3> : <h3 className="sidebarop_channel"><span className="sidebarop_hash">#</span>{title}</h3>}
        </div>
    )
}
export default Sidebarop;