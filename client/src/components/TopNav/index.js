import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./topNav.css";

class TopNav extends React.Component{
  render(){
    return(
      <div className="tTopNav">
        <Link to={"/"}>
          <div className="tLinkMarg">Home</div>
        </Link>
        <Link to={"/schedule"}>
          <div className="tLinkMarg">Schedule</div>
        </Link>
        <Link to={"/history"}>
          <div className="tLinkMarg">History</div>
        </Link>
        <Link to={"/roster"}>
          <div className="tLinkMarg">Roster</div>
        </Link>
        <Link to={"/trivia"}>
          <div className="tLinkMarg">Trivia</div>
        </Link>
      </div>
    )
  }
}

export default withRouter(TopNav);