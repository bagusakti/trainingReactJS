import { Component } from "react";

//Membuat Class untuk Timer
class Timer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        time: 0
      }
    }

    startTimer = () => {
      let self = this;
      this.interval = setInterval(function(){
        self.setState({
          time: parseInt(self.state.time) + 1
        })
      }, 1000)
    }

    pauseTimer = () => {
      clearInterval(this.interval)
    }

    resetTimer = () => {
      this.setState({
        time: 0
      })
    }

    render = () => {
      return (
        <div>
          <h1>{this.state.time}</h1>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.pauseTimer}>Pause</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      )
    }
    
  }

  export default Timer;

