import React, { Component } from 'react';
import {connect} from 'react-redux'

class Landing extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  testRedux(){
    console.log(this.props)
  }

  render(){
    return(
      <div className="Landing">
        Landing Comp
      </div>
    )
  }
}

function mapStateToProps(state){
  return state ;
} 

export default connect(mapStateToProps)(Landing);