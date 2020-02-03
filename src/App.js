import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Jumbo from "./components/Jumbo";
import FunCard from "./components/FriendCard"
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import character from "./simpson.json";
import Container from "./components/Container"
class App extends Component {
  state= {
    score: 0,
    topscore: 0,
    character: character,
    clicked: []
    
  }
  render() {
    
    return (
      <div>
        <Nav game="Clicky Game" start="Click on an image to begin" score={this.state.score} topscore={this.state.topscore}></Nav>
     
      <Jumbo backgroundImage="https://www.simpsonsworld.com/SimpsonsEOL.png">
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </Jumbo>
      <Container>
        {this.state.character.map(characters=>(
          <FunCard id={characters.id} url={characters.url} clicked={characters.clicked}
          ></FunCard>
          ))}
         
      </Container>
      <Footer></Footer>
      </div>
    )
  }
}

export default App;
