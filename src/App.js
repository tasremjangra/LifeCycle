import React, { Component } from 'react';
import './App.css';
import LifeCycle from './LifeCycle';

class App extends Component {
  constructor(props){
    super(props);

    this.state={counter: 1};
  }

  lucky = () => {
    const temp=this.state.counter;
    this.setState({counter: temp + 1});
   
  }

  render() {
    return (
      <div className="App">
      <h1>This is counter{this.state.counter}</h1>
      <hr/>
        <LifeCycle />
       <hr/>
       
      </div>
    );
  }
}

export default App;
