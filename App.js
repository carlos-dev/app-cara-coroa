import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Routes from './components/Routes';

export default class App extends Component  {
  render() {
    return (
      <Routes />      
    )
  }
}
