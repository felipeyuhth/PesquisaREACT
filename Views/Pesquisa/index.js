import React from 'react';
import {ColorPropType, View} from 'react-native';
import Cabecalho from './Componentes/Cabecalho';
import Corpo from './Componentes/Corpo';

const Pesquisa = ()=>{
    return(
        <View>
            <Cabecalho/>
            <Corpo/>
        </View>
    );
};

export default Pesquisa;