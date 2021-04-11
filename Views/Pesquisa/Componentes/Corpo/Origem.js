import React,{Fragment} from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';

const Corpo = () => {
    return(
        <Fragment>
            <View style={styles.viewMain}>
            <View style = {styles.topico}>
                <Text style = {styles.texto2}>
                    Origem e motivação
                <hr></hr>
                O Facebook usava um conjunto de licenças chamado "BSD + Patents" em grande parte de seus projetos de código aberto, que incluem, obviamente, o React. Isso significa que mesmo sendo um código aberto, o Facebook ainda tem os direitos autorais.
                {"\n"}
                Por exemplo, você desenvolve um projeto usando o software licenciado "BSD + Patents". 
                {"\n"}
                De inicio tudo pode ocorrer bem, porém se o Facebook decidi lançar um produto concorrente ao seu? Mesmo que eles possam estar violando suas patentes, a concessão da patente afirma que você não pode processá-los, a não ser que você deseje perder a licença de patente. 
                {"\n"}
                Restando apenas uma outra única opção que é apressada, cara e complicada, que ser migrar para outro framework. Isso basicamente significa que o Facebook tem imunidade em relação a quem usa seu software.
                {"\n"}
                Porém em Setembro de 2017, o Facebook anunciou que o React se tornaria licenciado no MIT (React License). Isso se tornou realidade em 16 de fevereiro de 2018, o que significa que todos os produtos relacionados ao React estão agora sob licença MIT. 
                {"\n"}
                Essa mudança ocasionou pois o diretor de engenharia do Facebook, Adam Wolff, havia argumentado que este sistema DE licenciamento tinha o objetivo de evitar o risco de litígios sobre patentes ou seja conflito de interesses ou controversas, ele disse que "se essa licença fosse amplamente adotada, poderia realmente reduzir o litígio sem mérito para todos os adotantes", contudo, isso se demostrou controverso. 
                {"\n"}
                Além disso, como nesse cenário as opções são migrar rapidamente do React ou simplesmente perder seus direitos por completo, não é surpresa que houvesse recomendações fortes para não usar o React para começart e recorrer a outras estruturas. Para se ter uma noção a fundação Apache proibiu o React em julho de 2017 e o WordPress declarou relutante em usá-lo para projetos futuros. Após muita discussão e pressão da comunidade, o Facebook trocou a licença e as empresa podem finalmente usar o React e o React Native sem o risco de serem processados ​​pelo Facebook ou perder suas patentes.
                </Text>
                <Image source = {require("../../../../img/Motivacao.png")}
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