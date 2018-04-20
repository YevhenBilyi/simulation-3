import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props){

    return (
      <div className="Nav">
        <Link to='/dashboard'><button>Home </button></Link>
        <Link to='/post/:postid'><button>New Post </button></Link> 
        <Link to='/'><button>Logout </button></Link> 

       <h1> Username: {props.username}</h1>
       <h1> Picture: {props.profile_pic}</h1>
      </div>
    );
}

function mapStateToProps(state){
  return {
    username:state.username,
    profile_pic:state.profile_pic
  }
}
export default connect(mapStateToProps)(Nav) ;
