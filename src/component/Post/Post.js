import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(){
    super();
    this.state={
      title:'',
      img:'',
      content:'',
      username:'',
      picture:''
    }
    this.componentDidMount=this.componentDidMount.bind(this);
  }
  componentDidMount(){
    axios.get(`/api/post/${this.props.match.params.postid}`).then(res=>{
      this.setState({
        title:res.data.title,
        img:res.data.img,
        content:res.data.content,
        username:res.data.username,
        picture:res.data.profile_pic
      })
    })
  }
  render() {
    return (
      <div className="Post">
        <p> Title:{this.state.title}</p>
        <p> Image:<img src={this.state.img} alt="image"/></p>
        <p> Content:{this.state.content}</p>
        <p> Username:{this.state.username}</p>
        <p> Picture:<img src={this.state.picture} alt="picture"/></p>
      </div>
    );
  }
}

export default Post;
