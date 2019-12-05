import React from 'react';
import { Component } from "react";

import './style.css';

class Foodbox extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      quantity: 1
    }
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  };

  handleQuantityChange(event) {
    const value = event.target.valueAsNumber;
    this.setState({
      quantity: value
    });
  }

  handleSubmission(event) {
    event.preventDefault();
    console.log("HS", this.props.name)
    const food = this.props.name;
    const quantity = this.state.quantity;
    const calories = this.props.calories;
    this.props.handleAddition({
      food,
      calories,
      quantity
    });
    this.setState({
      quantity: 1
    });
  }

render(){
  return (
    <div className="media">
    <img
      src={this.props.image}
      className="img-thumbnail mr-3 mw-25 border-0 photo"
      style={{maxWidth: "10em"}}
    />
    <div className="media-body align-self-center">
      <h5 className="mt-0 mb-1">{this.props.name}</h5>
      <small>{this.props.calories}</small>
    </div>
    <form className="row align-self-center" onSubmit={this.handleSubmission}>
      <input className="form-control col-9 p-3" type="number" value="1" style={{maxWidth: "5em"}}
        value={this.state.quantity}
            onChange={this.handleQuantityChange}
      />
      <button className="btn btn-primary col-3">+</button>
    </form>
  </div>
  )
}
}

export default Foodbox;
