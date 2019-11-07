import React, { Component } from "react";
import CarCard from "./components/CarCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import cars from "./cars.json";

class App extends Component {
  // Setting this.state.cars to the cars json array
  state = {
    cars
  };

  removeFriend = id => {
    // Filter this.state.cars for cars with an id not equal to the id being removed
    const cars = this.state.cars.filter(car => car.id !== id);
    // Set this.state.cars equal to the new cars array
    this.setState({ cars });
  };

  // Map over this.state.cars and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Jumbotron />
        {this.state.cars.map(car => (
          <CarCard
            id={car.id}
            image={car.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
