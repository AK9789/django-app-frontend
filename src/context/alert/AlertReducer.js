// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case 'SET_ALERT':
            return [...state, action.payload]
        case 'REMOVE_ALERT':
            return state.filter(alert => alert._id !== action.payload)
        default:
            return state
    }
}