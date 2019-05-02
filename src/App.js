import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  componentDidMount() {

    const instance = axios.create({
      baseURL: 'https://ajks56yzga.execute-api.sa-east-1.amazonaws.com/ApiSouPi/mgm/v1/',
      timeout: 1000,
      headers: { 
        'x-api-key': 'aA9rh6WLH76fPdO0FJcwz2qHUQ7HzCY85NgtnyOJ',
        'Access-Control-Allow-Origin': '*'
      }
    });

    instance.get('members/559802900/gains').then((data) => {
      console.log('data', data);
    })
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Apenas para ver o Netlify Funcionando
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprenda React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
