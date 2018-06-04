import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//import components
import DisplayGifs from './components/DisplayGifs';
import SearchBar from './components/SearchBar';

class App extends Component {

  state = {
    gifs: [],
    searchfield: ''
  };

  //ComponentDidMount - ajax call to get gifs from giphy
  //Used axio for request
  componentDidMount(){
    //By default, shows the trending gifs
    //Removed it as very slow to load... axios.get('http://api.giphy.com/v1/gifs/trending?api_key=74kCblNsHK9mSqTjNIX083FCh6tzBC1u')
    //   .then(res => {
    //     this.setState({gifs: res.data.data}, () => console.log(res.data.data));
    //   });
  }

  handleChange = (e) => {
    this.setState({ searchfield: e.target.value }, () => console.log(this.state.searchfield));
  }

  handleSubmit = (e) => {
    //On submit filter based on input field
    e.preventDefault();
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchfield}&api_key=74kCblNsHK9mSqTjNIX083FCh6tzBC1u`)
      .then(res => {
        this.setState({ gifs: res.data.data, searchfield: '' }, () => console.log(this.state));
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gif and Cie</h1>
        </header>
        <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchfield={this.state.searchfield} />
        <div className="container">
          <DisplayGifs gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
