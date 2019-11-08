import React, { Component } from "react";
import CarCard from "./components/CarCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import cars from "./cars.json";

class App extends Component {
  // Setting this.state.cars to the cars json array
  state = {
    cars: cars,
    highScore: 0,
    score: 0,
    notSelectedCars: cars,
    jumbotronPrompt: "Click a mustang to start"
  };

  selectCar = id => {
    //If an Image already clicked set Score back to 0
    const clickCar = this.state.notSelectedCars.find(item => item.id === id);
    if(clickCar === undefined) {
      this.setState({
        jumbotronPrompt: "You lost, beat your high score!",
        highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
        score: 0,
        cars: cars,
        notSelectedCars: cars
      })
    }
    else{
      // If an Image is clicked increment Score by 1
      const newCars = this.state.notSelectedCars.filter(item => item.id !== id);            
      this.setState({ 
        jumbotronPrompt: "Keep guessing!",
          score: this.state.score + 1,
          cars: cars,
          notSelectedCars: newCars
      });
    }
    this.shuffleArray();
  }
  

  //function to shuffle cars array
  shuffleArray = () => {
    for (let i = this.state.cars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.state.cars[i], this.state.cars[j]] = [this.state.cars[j], this.state.cars[i]];
    }
    this.setState({ cars });
}
  // Map over this.state.cars and render a CarCard component for each car object
  render() {
    return (
      <Wrapper>
        <Jumbotron 
        score={this.state.score} 
        jumbotronPrompt={this.state.jumbotronPrompt}
        highScore={this.state.highScore} />

        {this.state.cars.map(car => (
          <CarCard
            id={car.id}
            image={car.image}
            selectCar={this.selectCar}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
