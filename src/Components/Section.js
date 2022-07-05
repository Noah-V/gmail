import React from 'react'
import './css/Section.css'

function Section(props) {
  return (
    <div 
        className={`section ${props.selected && "section-selected"}`} 
        style={{
            borderBottom: `3px solid ${props.color}`, 
            color: `${props.selected && props.color}`
        }}
    >
        {props.icon}
        <h4>{props.title}</h4>
    </div>
  )
}

export default Section