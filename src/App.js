import React, { Component } from 'react';
import './App.css';
import Jumbo from "./components/Jumbo";
import FunCard from "./components/FriendCard"
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import character from "./simpson.json";

class App extends Component {
  state = {
    score: 0,
    topscore: 0,
    character: character,
    alreadyClicked: []

  }
  // ------------------------Main Game Function---------------------------------
  handleClick = id => {

    this.setState({
      // put the card id into the already clicked array
      alreadyClicked: this.state.alreadyClicked.concat(id)
    })
    // Check to see if the alreadyClicked array includes the current card id, if it does then set the score to zero and empty already clicked array
    if (this.state.alreadyClicked.includes(id)) {
                this.setState({
                        score: 0,
                        alreadyClicked: []
            })
    }
    else {
      // if it does not include the card, increase the score by 1. 
      this.setState({
        // increase the score by one for a correct choosing
        score: this.state.score + 1,
        // randomly sorts the array
        character: character.sort(function (a, b) { return 0.5 - Math.random() })
      })
      // check to see if the current score is greater than the top score, if it is then replaced the topscore with the current score. 
      if (this.state.score >= this.state.topscore) {
            this.setState({
            topscore: this.state.topscore + 1
            })
      }
    }
  }
  render() {

    return (
      <div>
        <Nav game="Clicky Game" start="Click on an image to begin" score={this.state.score} topscore={this.state.topscore}></Nav>

        <Jumbo backgroundImage="https://www.simpsonsworld.com/SimpsonsEOL.png">
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </Jumbo>
        <div className="container">
          <div className="row">
            {this.state.character.map(characters => (
              <FunCard id={characters.id} url={characters.url} clicked={characters.clicked} handleClick={this.handleClick}
              ></FunCard>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>

    )
  }
}

export default App;
