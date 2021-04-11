import React,{Fragment} from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';

const Corpo = () => {
    return(
        <Fragment>
            <View style={styles.viewMain}>
            <View style = {styles.topico2}>
                <Text style = {styles.texto2}>
                    Áreas de aplicação
                <hr></hr>
                Dispositivos Android:
                JSCore virtual machine: Destinado ao nosso código JavaScript;
                Android Runtime: Para o código Java;
                <hr></hr>
                Dispositivos iOS:
                JSCore virtual machine: Destinado ao nosso código JavaScript;
                Native Runtime: Para códigos Objective-C/Swift;
                <hr></hr>
                Existem também três importantes threads sendo executadas em uma aplicação React Native, fora as que normalmente já são executadas por aplicações nativas em background.
                A primeira delas é a main thread, que também é utilizada por qualquer aplicação nativa. Ela é responsável por tratar as requisições relacionadas a renderização de elementos na tela e também pelos gestos reproduzidos pelo usuário.
                A segunda é exclusiva ao React Native, responsável por executar o código JavaScript. O JavaScript é o responsável por toda lógica de negócio da aplicação. Além de definir a estrutura e as funcionalidades da nossa UI.
                E por último, a Shadow Queue que é a responsável pelos cálculos referentes ao layout.
                {"\n"}
                Voltando à analogia que utilizamos anteriormente, podemos considerar que a main thread e a thread de JavaScript seriam, respectivamente, o reino Nativo e o reino JavaScript.   
                </Text>
                <Image source = {require("../../../../img/areas.png")}
                style = {styles.image}/>    
            </View>
            <View style = {styles.topico}>
                <Text style = {styles.texto2}>
                    Tecnologias que apoiam
                <hr></hr>
                O React Native se tornou um framework muito utilizado no desenvolvimento de aplicativos mobile. Trouxemos como exemplo algumas empresas de destaque que possuem aplicações em React Native:
                <hr></hr>
                Facebook - É claro que o Facebook é uma das empresas que utiliza o framework, uma vez que ele foi criado internamente pela equipe de desenvolvimento da plataforma. Outras empresas do mesmo grupo, como é o caso do Instagram e do Facebook Ads Manager também utilizam o React Native para os aplicativos mobile;
                <hr></hr>
                Airbnb - O Airbnb é uma das empresas que chama mais atenção quando falamos em experiência centrada no usuário. A maior plataforma do mundo de hospedagem utiliza React Native no seu app mobile;
                <hr></hr>
                Uber - Com uma operação gigantesca em todo o mundo, a empresa também construiu o aplicativo mobile em React Native para oferecer a melhor experiência para os usuários;
                <hr></hr>
                Tesla - Quer falar sobre excelência e inovação? A Tesla, referência em crescimento no mercado de montadoras de carros elétricos, oferece aplicativos que utilizam a tecnologia React Native;
                <hr></hr>
                Wix - A Wix é uma plataforma de site facilitada e pensada para que o usuário final consiga criar páginas personalizadas. A versão mobile do aplicativo também é oferecida com configuração em React Native.
                </Text>
                <Image source = {require("../../../../img/Tecnologias.png")}
                style = {styles.image}/>   
            </View>
            </View>
        </Fragment>
    );
};
const styles = StyleSheet.create({
    image: {
        height: 'flex',
        width: '50%',
        borderRadius: 100,
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