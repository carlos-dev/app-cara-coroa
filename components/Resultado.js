import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const cara   = require('../assets/moeda_cara.png');
const coroa  = require('../assets/moeda_coroa.png');

export default class Resultado extends Component {
    constructor(props) {
        super(props);

        this.state = { resultado: ''}
    }

    componentWillMount() {
        const num = Math.floor(Math.random() * 2);
        let caraOuCoroa = '';

        if(num === 0) {
            caraOuCoroa = 'cara';
        } else {
            caraOuCoroa = 'coroa'
        }

        this.setState({resultado: caraOuCoroa})
    }

    render() {
        return (
            <View style={styles.main}>
                { 
                    this.state.resultado === 'cara' ? 
                    <Image source={cara} /> : 
                    <Image source={coroa} />
                }
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