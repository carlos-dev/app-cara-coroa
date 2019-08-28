import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';

export default class App extends Component  {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='principal' component={Principal} title="Cara ou coroa" />
          <Scene key='sobrejogo' component={SobreJogo} title="Sobre o jogo" />
          <Scene key='outrosjogos' component={OutrosJogos} title="Outros jogos" />
          <Scene key='resultado' component={Resultado} />
        </Scene>
      </Router>
    )
  }
}
