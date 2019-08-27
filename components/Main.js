import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const logo     = require('../assets/logo.png');
const btnJogar = require('../assets/botao_jogar.png');
const btnSobreJogo = require('../assets/sobre_jogo.png');
const btnOutrosJogos = require('../assets/outros_jogos.png');

export default function Main() {
  return (
    <View style={styles.body}>
      <View style={styles.main}>
        <Image source={logo} />
        <Image source={btnJogar} />
      </View>

      <View style={styles.footer}>
        <Image source={btnSobreJogo} />
        <Image source={btnOutrosJogos} />
      </View>
    </View>
  );
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
