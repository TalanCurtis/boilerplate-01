import React, { Component } from 'react';
import {connect} from 'react-redux'

class ATestSecretArea extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <div className="ATestSecretArea">
        ATestSecretArea Comp
      </div>
    )
  }
}

function mapStateToProps(state){
  return state ;
} 

export default connect(mapStateToProps)(ATestSecretArea);