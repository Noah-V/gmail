import React from 'react'
import './css/SidebarOption.css';

function SidebarOption(props) {
  return (
    <div className={`sidebar-option ${props.selected && "sidebar-option-active"}`}>
        {props.icon}
        <h3>{props.title}</h3>
        <p>{props.number}</p>
    </div>
  )
}

export default SidebarOption