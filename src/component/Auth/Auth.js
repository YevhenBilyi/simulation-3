import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {someAction} from '../../ducks/reducer';

class Auth extends Component {
  constructor(){
    super();
    this.state={
      username:'',
      password:''
    }
    this.handlePassword=this.handlePassword.bind(this)
    this.handleUsername=this.handleUsername.bind(this)
    this.register=this.register.bind(this);
    this.login=this.login.bind(this);
  }
  register(){
    let user={
      username:this.state.username,
      password:this.state.password
    }
    console.log(user)
    axios.post('/api/auth/register',user).then(res=>{
      this.props.someAction(res.data.id, res.data.username, res.data.profile_pic)
    })
  }
  login(){
    let user={
      username:this.state.username,
      password:this.state.password
    }
    axios.post('/api/auth/login',user).then(res=>{
      this.props.someAction(res.data.id, res.data.username, res.data.profile_pic)
    })
  }
  handleUsername(e){
    this.setState({
      username:e
    })
  }
  handlePassword(e){
    this.setState({
      password:e
    })
  }
  render() {
    return (
      <div className="Auth">
        <input value={this.state.username} onChange={e=>this.handleUsername(e.target.value)} type='text'/>
        <input value={this.state.password} onChange={e=>this.handlePassword(e.target.value)} type='text'/>
        <Link to='/dashboard'><button onClick={this.login} >Login </button></Link>
        <Link to='/dashboard'><button onClick={this.register}>Register </button></Link>
      </div>
    );
  }
}

export default connect(null,{someAction})(Auth) ;
