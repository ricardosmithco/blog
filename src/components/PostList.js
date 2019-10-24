import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostList extends React.Component{ 

    componentDidMount(){ // executes the instant our component is rendered on screen
        this.props.fetchPosts() // our action creator is called
    }

    render(){
        return <div>Post List</div>
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList);
// above, we put null because we don't have any mapToProps rn,
// then our second argument is our action creator: fetchPost