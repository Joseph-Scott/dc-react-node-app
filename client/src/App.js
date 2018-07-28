import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Tile from './components/tile';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggleLogin = this.toggleLogin.bind(this);

    this.state = {
      showLogin: false,
      tiles: [
        {
          title: 'Example',
          copy: 'Duis morbi nam egestas nisl vulputate aenean magnis purus, ipsum habitasse ante lacinia consectetur odio dictum magna ultrices, finibus vel porttitor elementum habitant curae himenaeos.',
          link: 'Click Me',
          url: 'http://google.com',
        },
        {
          title: 'Another Title',
          copy: 'Phasellus rutrum vestibulum erat aenean, blandit dictum torquent porta luctus, fermentum himenaeos ligula.',
          link: 'Clickity',
          url: 'http://google.com',
        },
        {
          title: 'Something',
          copy: 'Massa in condimentum hac habitasse etiam ut nostra, aliquam odio torquent consectetur litora tempor nibh, commodo feugiat sem scelerisque dis orci.',
          link: 'don\'t click this one',
          url: 'http://google.com',
        },
        {
          title: 'Foo',
          copy: 'Nisl ante dui faucibus dictum habitasse dictumst molestie eleifend, rhoncus aliquet sapien aliquam elementum luctus hendrerit dignissim, bibendum velit pulvinar accumsan duis sem tellus.',
          link: 'Bar',
          url: 'http://google.com',
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.toggleLogin}>Login</button>
        </header>
        <div className="App-intro">
          {this.state.showLogin && (
            <Login />
          )}
          <div className="tiles">
            {this.state.tiles.map(tile => <Tile data={tile} />)}
          </div>
        </div>
      </div>
    );
  }

  toggleLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin,
    })
  }
}

export default App;
