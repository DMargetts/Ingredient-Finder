import React from "react";
import Clarifai from "clarifai";
import Input from "./Input";
import FaceBox from "./FaceBox";
import Output from "./Output";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "a2a2089e77f448989b58fe22e0a57a4b"
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgURL: "",
      food: "",
      chance: ""
    };
    this.getImage = this.getImage.bind(this);
    this.getInput = this.getInput.bind(this);
  }

  getInput(event) {
    this.setState({ input: event.target.value });
  }
  getImage() {
    this.setState({ img: this.state.input });
    app.models.predict(Clarifai.FOOD_MODEL, this.state.input).then(response => {
      this.ingredients(response);
    });
  }
  ingredients(response) {
    const faceBox = response.outputs[0].data.concepts;
    let ingredients = faceBox.map(ingredient => {
      let capital = ingredient.name[0].toUpperCase();
      let str = ingredient.name.slice(1);

      return `${capital}${str}`;
    });
    let probability = faceBox.map(
      ingredient => `${(ingredient.value * 100).toFixed(1)}%`
    );
    this.setState({ food: ingredients, chance: probability });
  }

  render() {
    return (
      <div className="container">
        <Input input={this.getInput} image={this.getImage} />
        <FaceBox image={this.state.img} />
        <Output ingredients={this.state.food} probability={this.state.chance} />
      </div>
    );
  }
}

export default App;
