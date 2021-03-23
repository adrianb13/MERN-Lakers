import React from "react";
import { withRouter } from "react-router-dom";
import "./champs.css";
import TopNav from "../TopNav";

class Champs extends React.Component {
  render(){
    return(
      <div className="cBack">
        <div className="cNav">
          <TopNav></TopNav>
        </div>
        <div className="cTrophyBox">
          <div className="c20">20</div>
          <div className="cTrophy"></div>
          <div className="c20">20</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Champs);