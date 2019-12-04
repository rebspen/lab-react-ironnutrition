import React, { Component } from "react";
import "./App.scss";
import Foodbox from "./Components/Foodbox";
import Form from "./Components/Form";
import Search from "./Components/Search";

import foods from "./foods";
import { catchClause } from "@babel/types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      showForm: false,
      search: ""
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.showFoodForm = this.showFoodForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleFormInput(data, e) {
    e.preventDefault();
    const value = {
      name: data.food,
      calories: data.calories,
      image: data.image,
      quantity: 0
    };
    const updated = [value, ...this.state.foods];
    this.setState({
      foods: updated,
      search: "",
      showForm: false
    });
    console.log(this.state.foods[0]);
    console.log(this.state.foods[1]);
  }

  // handleSearchInput(data){
  //   console.log("search data", data)
  // }

  showFoodForm() {
   this.setState({
     showForm: !this.state.showForm
   })
  }

  search(data){
    // const value = foods.filter((value)=>{
    //   if(value.name.includes(data)){
    //     return value
    //   }
    // })
    this.setState({
      search: data
    })
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        {/* <input type="text" placeholder="Search..." onChange = {this.handleInputChange, this.handleSearchInput} name="search"
            value={this.state.search}/> */}
        <Search search = {this.search}/>    
        <button class ="form" onClick = {this.showFoodForm}>Add food</button>
        <Form show = {this.state.showForm} formSubmit = {this.handleFormInput}/>
        {this.state.foods.map(value => {
          if (value.name.toLowerCase().includes(this.state.search.toLowerCase())){
            return <Foodbox {...value} />;
          }
        })}
      </div>
    );
  }
}

export default App;
