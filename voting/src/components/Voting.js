import React, { Component } from "react";
import Item from "./Item";
import languages from "./languages";

class Voting extends Component {
  render() {
    return (
      <div>
        <h1>Vote for a language</h1>
        {languages.map((element) => (
          <Item key={element.id} lang={element.lang} />
        ))}
      </div>
    );
  }
}

export default Voting;
