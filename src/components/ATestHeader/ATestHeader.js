import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateATest} from '../../redux/reducers/aTest/aTestActions';
import {clearUser} from '../../redux/reducers/user/userActions';
import axios from 'axios';

class ATestHeader extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  test(){
    console.log(this.state, this.props)
    this.props.updateATest("Here is my Text")
    axios.get('/api/test').then((res)=>console.log("Session response: ", res.data))
  }

  handleLogout(){
    axios.get('/logout').then(()=>{this.props.clearUser(); this.props.history.push('/LoggedOut')})
  }
  handleAuthMe(){
    axios.get('/auth/me').then((res)=>console.log("handle AuthMe res:", res.data))
  }

  render(){
    return(
      <div className="ATestHeader">
        <NavLink to="/"> Landing </NavLink>
        <NavLink to="/Home"> Home </NavLink>
        <NavLink to="/AView01"> AView01 </NavLink>
        <NavLink to="/AView02"> AView02 </NavLink>
        <NavLink to="/ATestSecretArea"> ATestSecretArea </NavLink>
        <button onClick={()=>this.test()}>Redux</button>
        <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
        <button onClick={()=>this.handleLogout()}>LogOut</button>
        <button onClick={()=>this.handleAuthMe()}>AuthMe</button>
        <button onClick={()=>this.test()}>Test</button>
        {this.props.user.userName? 
         <div style={{display:"flex"}}>
          <div>
            {`user ${this.props.user.userName}`}
          </div>
           <img src={this.props.user.userImage} alt="profile pic" style={{height:"30px"}}/>
         </div>
         : "logged out"}
      </div>
    )
  }
}

const outputActions = {
  updateATest,
  clearUser
}

function mapStateToProps(state){
  return {
    aTest: state.aTest,
    user: state.user,
  };
}


export default withRouter(connect(mapStateToProps, outputActions )(ATestHeader));