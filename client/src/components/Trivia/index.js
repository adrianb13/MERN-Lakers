import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./trivia.css";

import TopNav from "../TopNav";

class Trivia extends React.Component{

  state = {
    questions: this.props.trivia,
    showQuestion: false,  //Question Populated and Shown
    current: null,        //Random Question
    answer: null,         //Correct Answer
    chosen: null,         //User Selected Answer
    submit: false,        //Answer Submitted
    correct: false,        //Correct answer showing
    win: 0,
    lose: 0,
  }

  componentDidMount = () => {
    this.randomize();
  }

  randomize = () => {
    if(this.props.trivia){
      let index = Math.floor(Math.random() * this.props.trivia.length)
      this.setState({
        current: this.state.questions[index],
        showQuestion: true
      }, () => {
        this.correctAnswer();
      })
    } 
  }

  correctAnswer = () => {
    if(this.state.current.answer === "a"){
      this.setState({
        answer: this.state.current.a
      })
    } else if(this.state.current.answer === "b"){
      this.setState({
        answer: this.state.current.b
      })
    } else if(this.state.current.answer === "c"){
      this.setState({
        answer: this.state.current.c
      })
    } else if(this.state.current.answer === "d"){
      this.setState({
        answer: this.state.current.d
      })
    }
  }

  selected = (e) => {
    e.preventDefault();
    this.setState({
      chosen: e.target.value
    })
  }

  submitAnswer = (e) => {
    e.preventDefault();
    let win = this.state.win;
    let lose = this.state.lose;
    if(this.state.current.answer === this.state.chosen){
      win = win + 1
      this.setState({
        submit: true,
        correct: true,
        win: win
      }, () => {
        this.endGame();
      })
    } else {
      lose = lose + 1
      this.setState({
        submit: true,
        correct: false,
        lose: lose
      }, () => {
        this.endGame();
      })
    }
    console.log(this.state.win, this.state.lose)
  }

  nextQuestion = () => {
    this.randomize();
    this.setState({
      submit: false
    })
  }

  endGame = () => {
    if(this.state.win === 4){
      this.setState({
        showQuestion: false,
        end: true,
        winner: true,
        win: 0,
        lose: 0
      })
    } else if (this.state.lose === 4){
      this.setState({
        showQuestion: false,
        end: true,
        winner: false,
        win: 0,
        lose: 0
      })
    }
  }

  render(){
    return(
      <div className="tBack">
        <TopNav />
        <div>
          <div className="tHead">Lakers Championship Trivia</div>
          <div>
            {this.state.showQuestion ? (
              <div className="tTriviaBox" key={this.state.current.id}>
                <div>{this.state.current.question}</div>
                <div className="tAnswerBox" onChange={this.selected}>
                  <div className="tRadio">
                    <input type="radio" id={this.state.current.a} name="answer" value="a" />
                    <label htmlFor="a">A: {this.state.current.a}</label>
                  </div>
                  <div className="tRadio">
                    <input type="radio" id={this.state.current.b} name="answer" value="b" />
                    <label htmlFor="b">B: {this.state.current.b}</label>
                  </div>
                  <div className="tRadio">
                    <input type="radio" id={this.state.current.c} name="answer" value="c" />
                    <label htmlFor="c">C: {this.state.current.c}</label>
                  </div>
                  <div className="tRadio">
                    <input type="radio" id={this.state.current.d} name="answer" value="d" />
                    <label htmlFor="d">D: {this.state.current.d}</label>
                  </div>                  
                </div>
                <div className="tSubmitBox">
                  {this.state.submit ? (
                    <div className="tSubmitBtn" onClick={this.nextQuestion}>Next</div>
                  ) : (
                    <div className="tSubmitBtn" onClick={this.submitAnswer}>Submit</div>
                  )}
                </div>
                {this.state.submit ? (
                  <div className="tCorrect">
                    {this.state.correct ? (
                      <div>Correct!!!</div>
                    ) : (
                      <div>Wrong, The Correct Answer is - {this.state.current.answer.toUpperCase()}: {this.state.answer} </div>
                    )}
                  </div>
                ) : (null)}
              </div>
            ) : (
              <div className="tTriviaBox">
                {this.state.end ? (
                  <div className="tWinner">
                    {this.state.winner ? (
                      <div>
                        <div>WINNER! You are a CHAMP!!!</div>
                        <div className="tTrophy"></div>
                        <div className="tSubmitBox">
                          <div className="tSubmitBtn" onClick={this.nextQuestion}>Next</div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div>You Lost! Time for a Mental Workout</div>
                        <div className="tSubmitBox">
                          <div className="tSubmitBtn" onClick={this.nextQuestion}>Next</div>
                        </div>
                      </div>
                    )}
                  </div>
                ) :  (
                  <div className="tTriviaBox tWinner">No Trivia Available</div>
                )}
              </div>
            )}
            <div className="tBrackets">
              <div className="tStandings">
                <div>Win: {this.state.win}</div>
                <div className="tTrophy"></div>
                <div>Lose: {this.state.lose}</div>
              </div>
              <div>Best of 7 - Get 4 Correct before getting 4 Wrong</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let trivia = {id: null, question: "", a: "", b: "", c: "", d: "", answer: ""}
  if(state.trivia.length > 0){
    trivia = Object.assign([], state.trivia);
  }
  return {
    trivia: trivia
  }
}

export default withRouter(connect(mapStateToProps)(Trivia));