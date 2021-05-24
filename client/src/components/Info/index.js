import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
//import moment from "moment";
import dateFormat from "dateformat";

import "./info.css";

import TopNav from "../TopNav";
import Banner from "../Banner";

let today = new Date();
today = dateFormat(today, "mm/dd/yyyy");

class Info extends React.Component{

  state = {
    today: today,
    lastGame: null,
    upcomingGames: [],
    playedGames:[],
    showLatest: false,
    recordwin: 0,
    recordloss: 0,
    playoffwin: 0, 
    playoffloss: 0,
    schedule: true,
    seriesWin: false,
    playoffs: false
  };

  componentDidMount = () => {
    this.latest();
    this.next();
  };

  componentDidUpdate = (nextProps) => {
    if(nextProps.schedule !== this.props.schedule){
      this.latest();
      this.next();
    };
  };

  //Sort By Date
  sortData = (a,b) => {
    //Converts date MM/DD/YYYY to Unix timestamp
    let dateA = parseInt((new Date(a.date).getTime() / 1000).toFixed(0));
    let dateB = parseInt((new Date(b.date).getTime() / 1000).toFixed(0));

    let comparison = 0;
    if( dateA > dateB){
      comparison = 1;
    } else if (dateA < dateB){
      comparison = -1
    }
    return comparison;
  }

  //Most Recently Played Game
  latest = () => {   
    if(this.props.schedule.length !== 0){
      let schedule = this.props.schedule.sort(this.sortData)
      let recent = schedule.findIndex(games => games.score === "N/A");
      if(recent > 0){
        this.setState({
          lastGame: this.props.schedule[(recent-1)],
          showLatest: true
        })
      }
      if(recent < 0){
        let last = this.props.schedule.length-1;
        this.setState({
          lastGame: this.props.schedule[last],
          showLatest: true
        })
      };
    };
  };

  //Determines which games are upcoming or already played
  next = () => {
    if(this.props.schedule.length !== 0){
      let pwin = 0;
      let ploss = 0;
      let rwin = 0;
      let rloss = 0;
      this.props.schedule.map(game => {
        //Playoff Series Calculation
        if(game.score.includes("Playoffs") && !game.score.includes("Play-In")){
          this.setState({
            playoffs: true
          })
          if(game.score.includes("Game 1")){
            pwin = 0;
            ploss = 0;
          }
          if(game.win === true){
            pwin++
            this.setState({
              playoffwin: pwin
            })
            if(pwin === 4){
              this.setState({
                seriesWin: true
              })
            }
          } else if (game.win === false){
            ploss++
            this.setState({
              playoffloss: ploss
            })
          }
        }
        if(game.score === "N/A" ){
          this.state.upcomingGames.push(game);
        } else {
          this.state.playedGames.push(game);
          //Wins & Losses
          if(!game.score.includes("Preseason") && !game.score.includes("Playoffs")){
            if(game.win === true){
              rwin++
              this.setState({
                recordwin: rwin
              })
            } else if (game.win === false){
              rloss++
              this.setState({
                recordloss: rloss
              })
            }
          }
          
        }
        return this.state
      })
      
    }; 
  };

  //Decides which game list to show
  showSchedule = (bool) => {
    if(bool){
      this.setState({
        schedule: true
      })
    } else {
      this.setState({
        schedule: false
      })
    };
  };

  formatDate = (date) => {
    if(date.charAt(0) === "0"){
      return date.substring(1)     
    } else {
      return date;
    };
  };

  render(){
    return(
      <div className="back">
        <div className="iBack">
          <TopNav />
          <div className="iBannerBox">
            <div className="iRecord iWins">W - {this.state.recordwin}</div>
            <div className="iBanner">
              <div className="iFly">
                <Banner />
              </div>
            </div>
            <div className="iRecord iLoses">L - {this.state.recordloss}</div>
          </div>
          <Link to="/champs">
            <div className="iSnake">
              <div className="iBottomBorder iChampions">
                <div className="iTrophy"></div>
                <div className="iShadow">2020 NBA Champions!!!</div>
              </div>
            </div>
          </Link>
          <div className="iNextGameBox">
            <div className="iHeader">Latest Game</div>
              {this.state.showLatest ? (
                <div className="iBottomBorder">
                  <div className="iBox">
                    <div className="iHighlight">
                      <div className="iContent">
                        {this.state.lastGame.home ? (
                          <div style={{padding: "0 10px"}}>{this.formatDate(this.state.lastGame.date)} vs. {this.state.lastGame.opponent}</div>
                        ) : (
                          <div style={{padding: "0 10px"}}>{this.formatDate(this.state.lastGame.date)} @ {this.state.lastGame.opponent}</div>
                        )}
                        <div>Final Score: {this.state.lastGame.score}</div>
                        {this.state.lastGame.win !== null ? (
                          <div>
                            {this.state.lastGame.win ? (
                              <div>Lakers Won!!!</div>
                            ) : (
                              <div>Lakers Loss</div>
                            )}
                          </div>
                        ) : (null)}
                        
                        {this.state.playoffs ? (
                          <div style={{color: "rgb(252, 185, 39)"}}>
                            {this.state.seriesWin ? (
                              <Link to="/champs">
                                <div className="iChamps">Lakers Win The Series</div>
                              </Link>

                            ) : (
                              <div>
                                {this.state.playoffwin > this.state.playoffloss ? (
                                  <div>Lakers Lead Series ({this.state.playoffwin} - {this.state.playoffloss})</div>
                                ) : ( 
                                  <div>
                                    {this.state.playoffwin < this.state.playoffloss ? (
                                      <div>Lakers Losing the Series ({this.state.playoffwin} - {this.state.playoffloss})</div>
                                    ) : (
                                      <div>Lakers Tied Series ({this.state.playoffwin} - {this.state.playoffloss})</div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ) : (null)}
                        
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="iBottomBorder">
                  <div className="iEnd" style={{marginBottom: "-30px"}}>Not Available</div>
                </div>
              )}
              <div className="iBottomBorder">
                <div className="iViewBox">
                  <div className="iButton" onClick={()=> this.showSchedule(true)}>Schedule</div>
                  <div className="iButton" onClick={()=> this.showSchedule(false)}>Games Played</div>
                </div>
              </div>
              {this.state.schedule ? (
                <div>
                  <div className="iHeader">Schedule</div>
                  <div className="iGameList">
                    {this.state.upcomingGames.map(games => (
                      <div className="iGame" key={games.date}>
                        {games.home ? (
                          <div>{this.formatDate(games.date)} vs. {games.opponent}</div>
                        ) : (
                          <div>{this.formatDate(games.date)} @ {games.opponent}</div>
                        )}                
                        <div>{games.game}</div>
                      </div>
                    ))}
                  </div>
                  <div className="iEnd iBottomBorder">More To Come</div>
                </div>
              ) : (
                <div>
                  <div className="iHeader">Games Played</div>
                  <div className="iGameList">
                    {this.state.playedGames.reverse().map(games => (
                      <div className="iGame" key={games.date}>
                        {games.home ? (
                          <div>{this.formatDate(games.date)} vs. {games.opponent}</div>
                        ) : (
                          <div>{this.formatDate(games.date)} @ {games.opponent}</div>
                        )}
                        {games.win ? (
                          <div>Lakers Win: {games.score}</div>
                        ) : (
                          <div>Lakers Lose: {games.score}</div>
                        )}                
                      </div>
                    ))}
                  </div>
                  <div className="iEnd">End Of Games Played</div>
                </div>
              )}
            </div>
          <div>
            
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  /* let info = {wins: null, losses: null, nextGame: "", upcoming: []}
  if(state.info.length > 0){
    info = Object.assign([], state.info)
  } */
  return { 
    //info: info,
    schedule: state.schedule
  }
}

export default withRouter(connect(mapStateToProps)(Info));