import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      search:'',
      posts:[]
    }
    this.handleSearch=this.handleSearch.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
    this.resetSearch=this.resetSearch.bind(this);
  }
handleSearch(e){
  this.setState({
    search:e
  })
}
componentDidMount(){

    axios.get('/api/posts').then(res=>{
      this.setState({posts:res.data})
    })
  
}
resetSearch(){
  if (this.state.search.length>0){
    axios.get(`/api/posts/?title=${this.state.search}`).then(res=>{
      this.setState({posts:res.data})
    })
  }
  else {
    axios.get('/api/posts').then(res=>{
      this.setState({posts:res.data})
    })
  }
  this.setState({search:''})
}


  render() {
    let posts=this.state.posts.map((post,i)=>{
      return (<Link to={`/post/${i}`} key={i}><div >{post.title} {post.username} {post.profile_pic}</div></Link>)
    })
    return (
      <div className="Dashboard">
        <input placeholder='search' onChange={e=>this.handleSearch(e.target.value)} type='text'/>
        <button onClick={this.resetSearch}>Search </button>
      
        {posts}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    id: state.id
  }
}
export default connect(mapStateToProps)(Dashboard) ;
