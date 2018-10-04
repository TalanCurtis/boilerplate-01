import React, { Component } from 'react';
import { setUser } from '../../redux/reducers/user/userActions';
import { connect } from 'react-redux';

class AuthMe extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
    console.log("auth me did mount");
    this.props.setUser();
  }

  render(){
    return(
      <div className="AuthMe">
      </div>
    )
  }
}

const outputActions = {
  setUser
}

function mapStateToProps(state){
  return state ;
} 


export default connect(mapStateToProps, outputActions)(AuthMe);