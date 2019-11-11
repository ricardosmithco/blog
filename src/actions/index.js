import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id => dispatch(fetchUser(id)));
};

// how to create asynchronos action creators
export const fetchPosts = () => async dispatch => { // could also be => async (dispatch)

        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data })
};



export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data});
};

// memoize function will only call the api for a user once.
// const _fetchUser = _.memoize(async(id, dispatch) =>{
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload: response.data })
//});
