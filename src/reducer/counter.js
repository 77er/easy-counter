const initState={
    count:100
}

export default (state=initState,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count:state.count+1
            }
        case 'DECREMENT':
            return {
                ...state,
                count:state.count-1
            }
        default:
            return state
    }
}