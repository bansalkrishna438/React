import React, { useState } from 'react'

import './App.css'
//functinal component example

// function App({ message }) {
//   return <h1>{`Hello, ${message}`}</h1>;
// }

// class component example

class App extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>;
  }
} 
export default App
