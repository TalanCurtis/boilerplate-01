import React, { Component } from 'react';
import {connect} from 'react-redux'

class AView01 extends Component{
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
      <div className="AView01">
        AView01 Comp
        <button onClick={()=>this.testRedux()}>Redux</button>
        {this.props.aTest.aTest}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state ;
} 

export default connect(mapStateToProps)(AView01);