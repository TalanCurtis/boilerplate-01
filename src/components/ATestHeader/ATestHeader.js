import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ATestHeader extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <div className="ATestHeader">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/AView02"> AView02 </NavLink>
      </div>
    )
  }
}

export default ATestHeader;