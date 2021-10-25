import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./home.css";

import Banner from "../Banner";
import Stars from "../Stars";

class Home extends React.Component{

  state = {
    retiredLS: [],
    retiredRS: [],
    show: false
  };

  componentDidMount = () => {
    this.sortRetired();
  };
  
  componentDidUpdate(nextProps){
    if(this.props.retired !== nextProps.retired){
      this.sortRetired();
    }
  };

  sortRetired = () => {
    if(this.props.retired.length > 0){
      this.props.retired.map(number => {
        if(number.id <= 5){
          this.state.retiredLS.push(number);
        } else {
          this.state.retiredRS.push(number);
        }
        return this.state
      })
      this.setState({
        show: true
      })
    } 
  };
  
  render(){
    return(
      <div>
        <div className="back">
          <div className="hOverflow">
            <div className="hBannerArea">
              <div className="hRetired hAdj">
                {this.state.show ? (
                  <div>
                  {this.state.retiredLS.map(player => (
                    <div key={player.id} className={"hDelay" + player.id}>{player.jersey} {player.name}</div>
                  ))}
                  </div>
                ) : (null)} 
              </div>
              <div className="hBanner">
                <Link to="/schedule">
                  <Banner />
                </Link>
              </div>
              <div className="hRetired hAdj">
                {this.state.show ? (
                  <div>
                  {this.state.retiredRS.map(player => (
                    <div key={player.id} className={"hDelay" + (player.id-5)}>{player.jersey} {player.name}</div>
                  ))}
                  </div>
                ) : (null)}
              </div>
            </div>
            
          </div>
          <div className="hStarField">
            <Link to="/schedule">
              <div className="hStarBox">    
                <div className="hStars">
                  <Stars></Stars>
                </div>
              </div>
            </Link>
          </div>
          {/* <div className="hRunnerBox">
            <div className="hRunner">
              <div className="hTrophy"></div>
              <div className="hShadow">2020 NBA Champions!!!</div>
              <div className="hTrophy"></div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  let players = {id: null, name: "", jersey:  ""}
  if(state.retired.length > 0){
    players = state.retired
  }
  return { retired: players}
}

export default withRouter(connect(mapStateToProps)(Home));