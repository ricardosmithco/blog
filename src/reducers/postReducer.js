export default (state = [], action) => {
    // Reducers will usually have switch statements.
    switch(action.type){

        case 'FETCH_POSTS':
            return action.payload;

        default:
            return state;    

    }
};