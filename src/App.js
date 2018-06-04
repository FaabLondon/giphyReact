import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//import components
import DisplayGifs from './components/DisplayGifs';

class App extends Component {

  state = {
    gifs: []
  };

  //ComponentDidMount - ajax call to get gifs from giphy
  //Used axio for request
  componentDidMount(){
    axios.get('http://api.giphy.com/v1/gifs/search?api_key=74kCblNsHK9mSqTjNIX083FCh6tzBC1u&q=test')
      .then(res => {
        this.setState({gifs: res.data.data}, () => console.log(res.data.data));
      });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gif and Cie</h1>
        </header>
        <div className="container">
          <DisplayGifs gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
