import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./stats.css";

import TopNav from "../TopNav";

class Stats extends React.Component {
  render(){
    const pic = {
      background: "url("+this.props.player.image+") no-repeat",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      overflow: "hidden"
    }

    return(
      <div className="sBack">
        <div className="sTopAdj">
        <TopNav />
          <div className="sTable">
            <div className="sName">{this.props.player.name}</div>
            <div className="sJersey">#{this.props.player.jersey}</div>
            <div className="sPic" style={pic}></div>
            <div className="sHeader">Last Game Stats</div>
            <table>
              <thead>
                <tr>
                  <th>Points</th>
                  <th>MIN</th>
                  <th>FG%</th>
                  <th>3PT%</th>
                  <th>FT%</th>
                  <th>REB</th>
                  <th>AST</th>
                  <th>BLK</th>
                  <th>STL</th>
                  <th>PF</th>
                  <th>TO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.player.game.PTS}</td>
                  <td>{this.props.player.game.MIN}</td>
                  <td>{this.props.player.game.FGP}</td>
                  <td>{this.props.player.game.P3P}</td>
                  <td>{this.props.player.game.FTP}</td>
                  <td>{this.props.player.game.REB}</td>
                  <td>{this.props.player.game.AST}</td>
                  <td>{this.props.player.game.BLK}</td>
                  <td>{this.props.player.game.STL}</td>
                  <td>{this.props.player.game.PF}</td>
                  <td>{this.props.player.game.TO}</td>
                </tr>
              </tbody>
            </table>

            <div className="sHeader">Season and Career Stats</div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>GP</th>
                  <th>PPG</th>
                  <th>MIN</th>
                  <th>FG%</th>
                  <th>3PT%</th>
                  <th>FT%</th>
                  <th>REB</th>
                  <th>AST</th>
                  <th>BLK</th>
                  <th>STL</th>
                  <th>PF</th>
                  <th>TO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Season</td>
                  <td>{this.props.player.season.GP}</td>
                  <td>{this.props.player.season.PPG}</td>
                  <td>{this.props.player.season.MIN}</td>
                  <td>{this.props.player.season.FGP}</td>
                  <td>{this.props.player.season.P3P}</td>
                  <td>{this.props.player.season.FTP}</td>
                  <td>{this.props.player.season.REB}</td>
                  <td>{this.props.player.season.AST}</td>
                  <td>{this.props.player.season.BLK}</td>
                  <td>{this.props.player.season.STL}</td>
                  <td>{this.props.player.season.PF}</td>
                  <td>{this.props.player.season.TO}</td>
                </tr>
                <tr>
                  <td>Career</td>
                  <td>{this.props.player.career.GP}</td>
                  <td>{this.props.player.career.PPG}</td>
                  <td>{this.props.player.career.MIN}</td>
                  <td>{this.props.player.career.FGP}</td>
                  <td>{this.props.player.career.P3P}</td>
                  <td>{this.props.player.career.FTP}</td>
                  <td>{this.props.player.career.REB}</td>
                  <td>{this.props.player.career.AST}</td>
                  <td>{this.props.player.career.BLK}</td>
                  <td>{this.props.player.career.STL}</td>
                  <td>{this.props.player.career.PF}</td>
                  <td>{this.props.player.career.TO}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let playerId = ownProps.match.params.id;
  let player = {id: null, name: "", jersey: null, game: [], season: [], career: []};
  if(state.stats.length > 0){
    player = Object.assign({}, state.stats.find(id => parseInt(id.id) === parseInt(playerId)));
  }
  return {
    player: player
  };
};

export default withRouter(connect(mapStateToProps)(Stats));