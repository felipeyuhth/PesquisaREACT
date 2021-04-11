import React,{Fragment} from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Cabecalho = () => {
    return(
        <Fragment>
            <View style = {styles.viewCabecalho}>
                <Text style = {styles.titulo}>
                    Sobre React Native
                </Text>
            </View>
        </Fragment>
    );
};
const styles = StyleSheet.create({
    viewCabecalho: {
        paddingTop: 20,
        width: '100%',
        textAlign: 'center',
        paddingBottom: 20,
    },
    titulo:{
        fontFamily: 'Times New Roman',
        display: 'flex',
        color: '#F5FFFA',
        fontSize: 28,
        backgroundColor: '#1C1C1C',
        width: '100%',
        flex: 1,
        paddingHorizontal: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 10,
    },
});
export default Cabecalho;