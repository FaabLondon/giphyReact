import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

import SearchBar from './components/SearchBar';
import DisplayGifs from './components/DisplayGifs';


it('renders App without crashing', () => {
  shallow(<App />);
});

it('renders title of the application', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Beginner code challenge</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('renders SearchBar without crashing', () => {
  shallow(<SearchBar />);
});

it('renders SearchBar with a form', () => {
  const wrapper = shallow(<SearchBar />);
  expect(wrapper.childAt(0).find('form').length).toEqual(1);
});

it('renders DisplayGifs without crashing', () => {
  //simulate whatever prop we want
  const props = {
    gifs: [{
      images: {
        fixed_width: {
          url: 'https://media3.giphy.com/media/mokQK7oyiR8Sk/200w.gif'
        }
      },
      title: 'dogs GIF'
    }]
  };
  shallow(<DisplayGifs { ...props } />);
});

it('renders 2 divs with gifs in DisplayGifs and a gif has an image', () => {
  //simulate whatever prop we want
  const props = {
    gifs: [{
      images: {
        fixed_width: {
          url: 'https://media3.giphy.com/media/mokQK7oyiR8Sk/200w.gif'
        }
      },
      title: 'dogs GIF'
    }, {
      images: {
        fixed_width: {
          url: 'https://media2.giphy.com/media/cLcxtL1z8t8oo/200w.gif'
        }
      },
      title: 'dogs jumprope GIF'
    }]
  };
  const wrapper = shallow(<DisplayGifs { ...props } />);
  expect(wrapper.childAt(0).find('div').length).toEqual(2);
  expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(0).find('img').length).toEqual(1);
});
