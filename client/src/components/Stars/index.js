import React from "react";
import "./stars.css";

let degrees = 360/17;
let radians = degrees * Math.PI/180;

class Stars extends React.Component{
  state = {
    radius: 200
  }

  componentDidMount = () =>{    
    this.interval();
    window.addEventListener("resize", this.resize());
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resize());
    clearInterval(this.state.intervalId);
  }

  interval = () => {
    let intervalId = setInterval(this.checkWin, 1000)
    this.setState({
      intervalId: intervalId
    })
  };

  checkWin = ()=> {
    this.resize()
  }

  resize = () => {
    if(window.innerWidth < 450){
      this.setState({
        radius: 110
      })
    } else if(window.innerWidth <= 800){
      this.setState({
        radius: 150
      })
    } else if (window.innerWidth <= 900){
      this.setState({
        radius: 175
      })
    }
  }
  
  locX = (num) => {
    let deg = radians * num
    let x = this.state.radius * Math.sin(deg);
    return x;
  }
  locY = (num) => {
    let deg = radians * num
    let y = this.state.radius * Math.cos(deg);
    return y;
  }

  render(){
    return(
      <div className="back">
        <div className="stBack">
          <div className="sStarBox">
            <div className="sStar" style={{transform: "translateY("+this.state.radius+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(1)+"px, "+this.locY(1)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(2)+"px, "+this.locY(2)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(3)+"px, "+this.locY(3)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(4)+"px, "+this.locY(4)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(5)+"px, "+this.locY(5)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(6)+"px, "+this.locY(6)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(7)+"px, "+this.locY(7)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(8)+"px, "+this.locY(8)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(9)+"px, "+this.locY(9)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(10)+"px, "+this.locY(10)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(11)+"px, "+this.locY(11)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(12)+"px, "+this.locY(12)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(13)+"px, "+this.locY(13)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(14)+"px, "+this.locY(14)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(15)+"px, "+this.locY(15)+"px)"}}></div>
            <div className="sStar" style={{transform: "translate("+this.locX(16)+"px, "+this.locY(16)+"px)"}}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default (Stars);