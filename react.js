// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc...

import React from 'react';

class App extends React.Component{
  render(){
    return(
      <h1>"I am a componenet!"</h1>
      )
  }
}

export default App


// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same. 

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

for(let i=0; i<names.length; i++){
  console.log(`${names[i]} is ${names[i].length} characters long.`)
}

let nameLength = names.map((value)=>{
  return `${value} is ${value.length} characters long`
})

console.log(nameLength)

// 3. Destructure the following variables out of state:

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

let { name, home, dislikes } = this.state

// 4. Write a React method that would add one to the count and update the state.

this.state = {
  count: 0
}

class App extends React.Componenet{
  constructor(props){
    super(props)
      this.state = {
          count: 0
      }
  }
  handleClick = () =>{
    let newCount = count+1
    return this.setState{{count: newCount}}
    }
  render(){
    return(
      <button onClick={this.handleClick}></button>
      {this.state.count}
      )
  }
}

// 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, { Component } from 'react';

class Recipes extends Componenet{
  constructor(props){
    super(props)
    this.state = {
      recipes:[
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
    ]
    }
  }

  render() {
    let recipes = this.recipe.state
    return(
      let recipes = recipes.map(recipe => {
        return(
          <li key={recipes.name}>{recipes.name}</li>
        )
      })
      <ul>
        {recipes}
      </ul>
    )
  }
}

export default Recipes