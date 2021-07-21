import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    number: 0,
    type: 'even',
  }

  increment = () => {
    const a = Math.floor(Math.random() * 100 + 1)
    this.setState(prevState => ({number: prevState.number + a}))
    console.log(' ')
  }

  render() {
    const {number} = this.state
    let b
    if (number % 2 === 0) {
      b = 'Even'
    } else {
      b = 'Odd'
    }
    return (
      <div className="bg">
        <div className="bg2">
          <h1 className="hd">Count {number}</h1>
          <p className="para">Count is {b}</p>
          <button onClick={this.increment} className="btn">
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
