import Axios from "axios";

const initialState = { candies: [] }

// ACTION TYPE
const DISPLAY_CANDIES = 'DISPLAY_CANDIES'
//ACTION CREATOR
const displayCandies = (candies) => ({
  type: DISPLAY_CANDIES,
  candies // array
})

// THUNK
export const fetchCandies = () => {
  return async (dispatch) => {
    const {data} = await Axios.get('/api/candies')
    dispatch(displayCandies(data))
  }
}
// SUB-REDUCER
const listCandies = (state, action) => {
  return {...state, candies: action.candies}
}
// ROOT-REDUCER
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_CANDIES':
      return listCandies(state, action)
    default:
      return state
  }
}

export default rootReducer
