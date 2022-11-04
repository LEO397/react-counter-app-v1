import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    currentid: 5,
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  addAnotherCounter = (e) => {
    this.setState({
      currentid: this.state.currentid + 1,
      counters: this.state.counters.concat([
        {
          id: this.state.currentid + 1,
          value: 0,
        },
      ]),
    });
    console.log(this.state.counters);
  };

  render() {
    return (
      <div>
        <div>
          {this.state.counters.map((counter) => (
            <Counter key={counter.id} value={counter.value} selected={true} />
          ))}
        </div>
        <button onClick={() => this.addAnotherCounter({ id: "hehe" })}>
          Add Counter
        </button>
      </div>
    );
  }
}

export default Counters;
