import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robot: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robot.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (!this.state.robot.length) {
      return <h1>Loading....</h1>;
    }
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
