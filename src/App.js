import React, { Component } from 'react'; 
import './App.css';

import Forms from './forms';
import Counters from './counter';
let ci;
class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      hours:0,
      minutes:0,
      seconds:0,
      calculating: false,
    }

    this.onDataSubmit = this.onDataSubmit.bind(this);
    this.resetApp = this.resetApp.bind(this);
  }
  
  onDataSubmit(e){

    e.preventDefault();

    let hours = Number(document.getElementById('hours').value);
    let minutes = Number(document.getElementById('minutes').value);
    let seconds = Number(document.getElementById('seconds').value);
    
    if(hours===0 && minutes === 0 && seconds ===0){
      return ;
    }

    this.setState({hours,minutes,seconds, calculating:!this.state.calculating});
    

    let s,m,h;
   ci = setInterval(()=>{
      
      if((m === 0 && s === 0 & h === 0)){
        this.toggleCalculateButton();
        return ;
      }

      // console.log(s,m,h);
      this.setState(prevState => {
        
        if(prevState.seconds === 0){
          s = 60;
        } else {
          s= prevState.seconds - 1
        }

        if(prevState.seconds === 0){
          m=prevState.minutes-1;
        } else {
          m=prevState.minutes;
        }

        if(prevState.minutes === 0 && prevState.hours !== 0){
          h = prevState.hours-1;
          m=59;
        } else {
          h=prevState.hours;
        }

        return(
          {
            seconds:s,
            minutes:m,
            hours:h
          }
        );
      })
    }, 1000)
  }

  resetApp(){
    clearInterval(ci);
    this.setState({
      hours:0,
      minutes:0,
      seconds:0,
      calculating: false,
    })
  }

  

  render() {
    return (
      <div className="App">
        <h1>React Count Down App</h1>
        <Forms onDataSubmit={this.onDataSubmit} calculating={this.state.calculating} reset={this.resetApp}/>
        <Counters data={this.state} />
      </div>
    );
  }
}

export default App;
