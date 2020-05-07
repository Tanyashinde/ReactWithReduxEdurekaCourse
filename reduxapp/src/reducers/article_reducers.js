export default function(state={},action){
    switch(action.type){
        case 'GET_Articles':
            return{...state,articledata: action.payload}
        default:
            return state;
    }
}
