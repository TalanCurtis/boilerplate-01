import React, { Component } from 'react';

class LoggedOut extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <div className="LoggedOut">
        LoggedOut Comp
      </div>
    )
  }
}

export default LoggedOut;