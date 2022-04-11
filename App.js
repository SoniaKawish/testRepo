import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen.js';
import HistoricalScreen from './components/HistoricalScreen';
import DetailScreen from './components/DetailScreen'; 
import FunFactScreen from './components/FunFacts'; 


const Stack = createNativeStackNavigator();  

export default function App() { 
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown:false}}>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='Historical' component={HistoricalScreen} />
    <Stack.Screen name='Details' component={DetailScreen} />
    <Stack.Screen name='FunFacts' component={FunFactScreen }/>
    
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
