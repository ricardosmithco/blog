import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import UserHeader from './UserHeader';

class PostList extends React.Component{ 

    componentDidMount(){ // executes the instant our component is rendered on screen
        this.props.fetchPosts() // our action creator is called
        
    }

    renderList(){
        return this.props.posts.map(post =>{
            return(      
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            );
        });
    }

    render(){
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) =>{ // mapStateToProps is used to get data from redux side of our application into the react side
                                    // everytime out reducers run, mapStateToProps will be called again.
    return { posts: state.posts}
} 


export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList);
// above, we put null because we don't have any mapToProps rn,
// then our second argument is our action creator: fetchPost