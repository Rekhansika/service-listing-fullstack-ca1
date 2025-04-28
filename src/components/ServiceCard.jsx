import React from 'react'

const ServiceCard = ({title,description}) => {
  return (
    <div style={{justifyContent:"center"}}>
      <h2>Title : {title}</h2>
      <h5>Description : {description}</h5>
    </div>
  )
}

export default ServiceCard
