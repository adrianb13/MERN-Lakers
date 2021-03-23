import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./sideNav.css";

class SideNav extends React.Component{
  render(){
    return(
      <div className="sSideNav">
        <Link to={"/"}>
          <div className="sLinkMarg">Home</div>
        </Link>
        <Link to={"/schedule"}>
          <div className="sLinkMarg">Schedule</div>
        </Link>
        <Link to={"/history"}>
          <div className="sLinkMarg">History</div>
        </Link>
        <Link to={"/roster"}>
          <div className="sLinkMarg">Roster</div>
        </Link>
        <Link to={"/trivia"}>
          <div className="sLinkMarg">Trivia</div>
        </Link>
      </div>
    )
  }
}

export default withRouter(SideNav);