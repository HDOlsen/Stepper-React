import React, { Component } from 'react';
import {Number} from './components/Number';
import './App.css';
import './styles.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      number : 0
    }
  }

  handleDropNumber = (() => {

    console.log(this.state.number)

    let number = this.state.number

    this.setState({
      number : number-1

    })

  })

  handleRaiseNumber = (() => {

    console.log(this.state.number)

    let number = this.state.number

    this.setState({
      number : number+1

    })

  })

  render() {
    return (
      <div class="flex" id="id">
        <button class="number" onClick={this.handleDropNumber}>-</button>
        <Number number = {this.state.number}/>
        <button class="number" onClick={this.handleRaiseNumber}>+</button>
      </div>
    );
  }
}

export default App;
