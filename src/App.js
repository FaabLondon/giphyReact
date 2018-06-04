import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//import components
import DisplayGifs from './components/DisplayGifs';
import SearchBar from './components/SearchBar';

class App extends Component {

  state = {
    gifs: [],
    search: '',
    rating: 'All',
    limit: 1 // 1 by default
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
    const {name, value} = e.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  handleSubmit = (e) => {
    //On submit filter based on input field
    e.preventDefault();
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=74kCblNsHK9mSqTjNIX083FCh6tzBC1u&limit=${this.state.limit}`)
      .then(res => {
        this.setState({ gifs: res.data.data }, () => console.log(this.state));
      });
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
          <h1 className="App-title">Gif and Cie</h1>
        </header>
        <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleChangeRating={this.handleChangeRating} />
        <div className="container">
          <DisplayGifs gifs={filteredArr}/>
        </div>
      </div>
    );
  }
}

export default App;
