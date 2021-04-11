import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {useNavegation} from '@react-navigation/native';
import Beneficios from './Views/Pesquisa/Componentes/Corpo/index';
import Origem from './Views/Pesquisa/Componentes/Corpo/Origem';
import Área from './Views/Pesquisa/Componentes/Corpo/Area';
import { color } from 'react-native-reanimated';
import { StyleSheet} from 'react-native';


function HomeScreen() {
  const navigation = useNavigation();
  return (


    
    <View style={styles.viewMain}>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <View style={styles.contanierTitulo}>
      <View style={styles.viewTexto1}>
        <Text style={styles.texto1}>Pesquisa React Native</Text>
      </View >
      </View>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
      

      <TouchableOpacity onPress={() => navigation.push(' Beneficios')}>
      <Text>O que é ? / Beneficios</Text>
      </TouchableOpacity>
   
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
    
      <TouchableOpacity onPress={() => navigation.push('Origem')}>
      <Text>Origem</Text>
      </TouchableOpacity>
     
      <Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
   
      <TouchableOpacity onPress={() => navigation.push('Área')}>
      <Text>Área</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name=" Beneficios" component={ Beneficios} />
        <Stack.Screen name="Origem" component={Origem} />
        <Stack.Screen name="Área" component={Área} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  texto1:{
   color:'#7FFFD4',
   fontSize:30,
  },
  viewMain:{
    alignItems: 'center', 
    justifyContent: 'top',
    backgroundColor:'#5F9EA0',
    width:'100%',
    height:'100%',
    
  },
  contanierTitulo:{
    backgroundColor:'#008000',
    height:100,
    width:300,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:25,
    
  }
});
export default App;