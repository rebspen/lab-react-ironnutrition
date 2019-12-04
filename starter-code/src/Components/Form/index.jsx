import React from "react";
import { Component } from "react";

import "./style.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "",
      calories: 0,
      image: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleInputChange(event) {
    console.log(typeof event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    if (this.props.show){
      return (
        <form class ="form"
          onSubmit={e => {
            this.props.formSubmit(this.state, e);
          }}
        >
          <input
            type="text"
            placeholder="food"
            name="food"
            value={this.state.food}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="calories"
            placeholder="calories"
            value={this.state.calories}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="image"
            placeholder="image"
            value={this.state.image}
            onChange={this.handleInputChange}
          />
          <button>Add food to List</button>
        </form>
      );
    } else {
      return null;
    } 
  }
}

export default Form;
