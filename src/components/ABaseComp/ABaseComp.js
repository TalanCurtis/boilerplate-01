import React, { Component } from 'react';
import colors from "../../styles/main.css"

class ABaseComp extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <div className="ABaseComp">
        ABaseComp Comp
        <div style={{height: "200px", width:"200px", backgroundColor: colors.test1}}></div>
      </div>
    )
  }
}

export default ABaseComp;