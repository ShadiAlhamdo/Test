import React from 'react'

const ServicesCard=({icon,title,subtitle})=> {
  return (
    <div className='service-card'>
        {icon}
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </div>
  )
}

export default ServicesCard