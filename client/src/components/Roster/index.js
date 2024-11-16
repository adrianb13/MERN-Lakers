import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./roster.css";

import SideNav from "../SideNav";

class Roster extends React.Component{
  
  render(){
    return (
      <div>
        <div className="back">
          <div className="rAdjust">
            <SideNav />
          </div>
          <div className="rCourt">
            <div className="rBuffer"></div>
            <div className="rArea">
              <div className="rTitle">ROSTER</div>
              <table>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Pos.</th>
                    <th>Age</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>College</th>
                    <th>Contract</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.roster.map(player =>(
                    <tr key={player.id}>
                      <td className="rTextCenter">{player.jersey}</td>
                      <td className="rTextPadLt">
                        <Link to={"./roster/" + player.id}>
                          {player.name}
                        </Link>
                      </td>
                      <td className="rTextCenter">{player.position}</td>
                      <td className="rTextCenter">{player.age}</td>
                      <td className="rTextCenter">{player.height}</td>
                      <td className="rTextCenter">{player.weight}</td>
                      <td className="rTextCenter">{player.college}</td>
                      <td className="rTextCenter">{player.contract}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="rCoachBox">
                <div><span className="rBold">Head Coach:</span> JJ Redick</div>
                <div><span className="rBold">Assistant Coaches:</span> Nate McMillan, Scott Brooks, Bob Beyer, Greg St. Jean, Lindsey Harding, Beau Levesque, Michael Wexler - Video Coordinator</div>
                <div><span className="rBold">Trainers:</span> Leroy Sims, Octavio Marquez, Shane Besedick, Mike Mancias, Jon Ishop</div>
              </div>
            </div>
            <div className="rBallBox">
              <div className="rBall"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let players = {id: null, name: "", jersey:  ""};
  let stats = {id: null, name: ""}
  if(state.roster.length > 0){
    players = Object.assign([], state.roster)
  }
  if(state.stats.length > 0){
    stats = Object.assign([], state.stats)
  }
  return { 
    roster: players,
    stats: stats
  }
}

export default withRouter(connect(mapStateToProps)(Roster));