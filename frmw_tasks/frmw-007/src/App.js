import React, { Component as C } from 'react'
import './App.css'
import DatePicker from 'material-ui/DatePicker'
import moment from 'moment'
import Counter from './Counter'
import { render } from '@testing-library/react'

const f = 'D'

class App extends C {
  state = {
    Day: 10,
  }
  incrementHandler = () => {
    const Day = this.state.Day + 1
    this.setState({ Day })
  }
  render() {
    return (
      <div>
        <h4 id="author" style={{ display: 'none' }} title="Ripo4ek">
          Andrey Lyapustin
        </h4>
        <Counter onIncrement={this.incrementHandler} stars={this.state.Day} />
        <DatePicker
          onChange={(n = null, date) =>
            this.setState({ Day: Number(moment(date).format(f)) })
          }
          floatingLabelText="Выберите дату!"
        />
      </div>
    )
  }
}

export default App
