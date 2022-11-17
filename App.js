import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Mongagua from './components/Mongagua';
import Santos from './components/Santos';
import SaoVicente from './components/SaoVicente';
import Cubatao from './components/Cubatao';
import Itanhaem from './components/Itanhaem';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mongagua" component={Mongagua} />
        <Stack.Screen name="Santos" component={Santos} />
        <Stack.Screen name="Itanhaem" component={Itanhaem} />
        <Stack.Screen name="SaoVicente" component={SaoVicente} />
        <Stack.Screen name="Cubatao" component={Cubatao} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});