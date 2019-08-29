import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './Principal';
import SobreJogo from './SobreJogo';
import OutrosJogos from './OutrosJogos';
import Resultado from './Resultado';

const Routes = () => {
    return(
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

export default Routes;