import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo     = require('../assets/logo.png');
const btnJogar = require('../assets/botao_jogar.png');
const btnSobreJogo = require('../assets/sobre_jogo.png');
const btnOutrosJogos = require('../assets/outros_jogos.png');

export default class Principal extends Component  {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.main}>
          <Image source={logo} />

          <TouchableHighlight
            onPress={() => { Actions.resultado() }}
          >
            <Image source={btnJogar} />
          </TouchableHighlight>
        </View>
  
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => { Actions.sobrejogo() }}
          >
            <Image source={btnSobreJogo} />
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => { Actions.outrosjogos() }}
          >
            <Image source={btnOutrosJogos} />
          </TouchableHighlight>
        </View>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#61bd8c',
    justifyContent: 'center'
  },
  main: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
