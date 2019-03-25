import React from 'react'
import {Candy}  from './Candy'
import {connect} from 'react-redux'

const DisconnectedAllCandies = (props)=>{
  const candies = props.candies
  console.log(candies)
  return (
    <div>
      <ul>
        {candies && candies.length ? candies.map(candy=>{return<li key={candy.id}>
          <Candy candy={candy}/>
        </li>}) : 'Loading'}
      </ul>
    </div>
  )
}

const mapStateToProp = (state)=>({
  candies: state.candies
})

export const AllCandies = connect(mapStateToProp)(DisconnectedAllCandies)
