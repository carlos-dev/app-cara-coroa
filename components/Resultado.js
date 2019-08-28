import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const cara   = require('../assets/moeda_cara.png');
const coroa  = require('../assets/moeda_coroa.png');

export default class Resultado extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Image source={cara} />
                <Image source={coroa} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#61bd8c',
        justifyContent: 'center',
        alignItems: 'center'
    }
})