const DISPLAY_CANDIES = 'DISPLAY_CANDIES'

const displayCandies = () => ({
  type: DISPLAY_CANDIES
})

const initialState = { candies: [] }

export const listCandies = (state, action) => {
  
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_CANDIES':
      return listCandies(state, action)
    default:
      return state
  }
}

export default rootReducer
