import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component{
    render(){
        
        const { user } = this.props;

        if(!user){
            return null;
        }
        return <div className="header">{user.name}</div>
    }
}

// to give this UserHeader.js component access to our Redux-level state, so,
// we define out MapStateToProps() function.
const mapStateToProps = (state, ownProps) =>{
    return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserHeader);