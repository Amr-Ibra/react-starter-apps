import React, { Component } from "react";

class Item extends Component {
  state = { voteCount: 0 };

  addOneVote = () => {
    this.setState({ voteCount: this.state.voteCount + 1 });
  };

  render() {
    return (
      <div className="language">
        <div className="voteCount">{this.state.voteCount}</div>
        {this.props.lang}
        <button onClick={this.addOneVote}>Vote ⌁</button>
      </div>
    );
  }
}

export default Item;
