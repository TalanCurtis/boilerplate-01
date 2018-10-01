import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateATest} from '../../redux/reducers/aTest/aTestActions'

class ATestHeader extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  test(){
    console.log(this.state, this.props)
    this.props.updateATest("Here is my Text")
  }

  render(){
    return(
      <div className="ATestHeader">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/AView01"> AView01 </NavLink>
        <NavLink to="/AView02"> AView02 </NavLink>
        <NavLink to="/ATestSecretArea"> ATestSecretArea </NavLink>
        <button onClick={()=>this.test()}>Redux</button>
        <button>Login</button>
      </div>
    )
  }
}

const outputActions = {
  updateATest
}

function mapStateToProps(state){
  return {aTest: state.aTest};
}


export default connect(mapStateToProps, outputActions )(ATestHeader);