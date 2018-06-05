import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//import components
import DisplayGifs from './components/DisplayGifs';
import SearchBar from './components/SearchBar';

//Global variables
const maxLimit = 100;

class App extends Component {

  state = {
    gifs: [],
    search: '',
    rating: 'All', //All by default
    limit: 1, // 1 by default
    error: ''
  };

  //ComponentDidMount - By default, shows the trending gifs
  //Removed it as very slow to load...
  componentDidMount(){
    //axios.get('http://api.giphy.com/v1/gifs/trending?api_key=74kCblNsHK9mSqTjNIX083FCh6tzBC1u')
    //   .then(res => {
    //     this.setState({gifs: res.data.data});
    //   });
  }

  //get the different fields and their value that were changed in the form
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.limit > maxLimit || this.state.limit < 1) this.setState({ error: `Number must be between 1 and ${maxLimit}`});
    else {
      //On submit filter based on input field
      axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=74kCblNsHK9mSqTjNIX083FCh6tzBC1u&limit=${parseInt(this.state.limit, 10)}`)
        .then(res => {
          this.setState({ gifs: res.data.data, error: '' }, ()=> console.log(this.state.gifs));
        });
    }
  }

  //Returns a filtered array of the search results
  filterRating = () => {
    if (this.state.rating === 'All') return this.state.gifs;
    else return this.state.gifs.filter(elt => elt.rating === this.state.rating);
  }

  render() {
    const filteredArr = this.filterRating();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Beginner code challenge</h1>
        </header>
        <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error}/>
        <div className="container">
          <DisplayGifs gifs={filteredArr}/>
        </div>
      </div>
    );
  }
}

export default App;
