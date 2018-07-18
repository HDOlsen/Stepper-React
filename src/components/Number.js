import React, {Component} from 'react'

export class Number extends Component {

  render() {
    return (
      <div id="number">
        <p class="zero">{this.props.number}</p>
      </div>
    )
  }
}