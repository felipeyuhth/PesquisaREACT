import React,{Fragment} from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';

const Corpo = () => {
    return(
        <Fragment>
            <View style={styles.viewMain}>
            <View style = {styles.topico}>
                <Text style = {styles.texto2}>
                    O que é?
                <hr></hr>
                    React Native é um framework para JavaScript. O projeto foi desenvolvido por engenheiros do Facebook. Ele contém diversas ferramentas que viabilizam a criação de aplicativos móveis nativos para a plataforma iOS, Android e ainda para WEB, tudo isso utilizando o mesmo código para ambas plataformas.
                </Text>
                <Image source = {require("../../../../img/Oquee.png")}
                style = {styles.image}/>
            </View>
            <View style = {styles.topico2}>
                <Text style = {styles.texto2}>
                    Beneficios de Uso
                <hr></hr>
                    É notável a crescente demanda do uso de aplicativos móveis nos últimos anos. Pensando nisso, diversas empresas desenvolvem suas soluções para facilitar a criação destes aplicativos. Com o React Native, o Facebook lançou uma solução incrível para o desenvolvimento multiplataforma utilizando apenas código Javascript, o que facilita (e muito) os desenvolvedores que já possuem conhecimento em desenvolvimento web e até os que não possuem, já que é um framework com alta curva de aprendizado.
                </Text>
                <Image source = {require("../../../../img/Usos.png")}
                style = {styles.image}/>
            </View>
            </View>
        </Fragment>
    );
};
const styles = StyleSheet.create({
    image: {
        height: 'flex',
        width: '35%',
        borderRadius: 20,
        margin: 7,
        alignContent: 'center',
      },
      topico:{
        padding: 10,
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: '#000000',
        width: '100%',
        borderRadius: 10,
        textAlign: 'center',
        marginVertical: 20,
      },
      viewMain:{
        alignItems: 'center', 
        justifyContent: 'top',
        backgroundColor:'#5F9EA0',
        width:'100%',
        height:'100%',
        
      },
      topico2:{
        padding: 10,
        flexDirection: 'row-reverse',
        display: 'flex',
        alignContent: 'flex-start',
        backgroundColor: '#000000',
        width: '100%',
        borderRadius: 10,
        textAlign: 'center',
      },
      texto2:{
        color: '#F5FFFA',
        fontSize: 20,
        height: 'flex',
        width: '100%',
        fontFamily: 'Times New Roman',
      },
});
export default Corpo;