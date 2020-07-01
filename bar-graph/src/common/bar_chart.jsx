import React, { Component } from "react";
import * as d3 from "d3";

class Bar extends Component {
  state = {};
  myRef = React.createRef();
  componentDidMount() {
    const data = [12, 36, 6, 25, 35, 10, 20];
    let accessToRef = d3.select(this.myRef.current);
    accessToRef
      .selectAll("rect")
      .data([1, 2, 4])
      .enter()
      .append("rect")
      .attr("x", (d = 5, i) => i * 70)
      .attr("y", (d = 5, i) => 80 - 10 * 5)
      .attr("width", 65)
      .attr("height", (d = 5, i) => d * 10)
      .attr("fill", "tomato");
  }
  render() {
    return <div ref={this.myRef}>Testing Ref</div>;
  }
}

export default Bar;
