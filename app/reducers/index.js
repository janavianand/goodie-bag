import axios from 'axios'

export const getCandyThunk = ()=>{
  return async(dispatch)=>{
    const {data} = await axios.get('/api/candies')
    dispatch(setCandyAction(data))
  }
}
//action type
const SET_CANDY = 'SET_CANDY'

//action creator
const setCandyAction = (candy)=>({type:SET_CANDY,candy})

const initialState = {candies:[]}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CANDY:
    return {...state,candies:[...action.candy]}
    default:
      return state
  }
}

export default rootReducer
