import React, { Component } from 'react';
import './App.css';
import ResultsDisplay from './ResultsDisplay/ResultsDisplay';

class App extends Component {
  
  constructor() {
    super();
    this.state = { 
      searchResults: []
    };
  }

  getWikipedia = async () => {
    let term = document.querySelector('.inputField').value;
    let response = await fetch('http://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&gsrsearch=' + term);
    let searchResults = await response.json();
    let searchArray = Object.keys(searchResults.query.pages).map((key) => {
      return searchResults.query.pages[key];
    });
    this.setState({ searchResults: searchArray });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>React - Wikipedia Viewer</h1>
        </header>
        <main>
          <input className="inputField" type="text" placeholder="Search Wikipedia" />
          <button onClick={ this.getWikipedia }>SEARCH</button>
          <a className="randomLink" href="https://en.wikipedia.org/wiki/Special:Random">RANDOM ARTICLE</a>
          <div className="output">
            { this.state.searchResults.map((result) => (
              <ResultsDisplay key={ result.index } title={ result.title } />
            )) }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
