import React,{Fragment} from 'react'


export const Candy = (props)=>{
  const candy = props.candy
  return(
    <Fragment>
    <h3>{candy.name}</h3>
    <p>Quantity: {candy.quantity}</p>
    <p>{candy.description}</p>
    <img src={candy.imageUrl}/>

    </Fragment>
  )
}
