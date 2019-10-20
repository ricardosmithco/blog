import jsonPlaceholder from '../apis/jsonPlaceholder';

// how to create asynchronos action creators

export const fetchPosts = () => async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', psyload: response })
};    
