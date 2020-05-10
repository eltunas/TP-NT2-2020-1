import React from 'react';
import CronoComponent from './Components/CronoComponent.js'
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenidos NT2!</Text>
      <Text>Proyecto a realizar: Cronometro Pomodoro.</Text>
      <Text>Proyecto de Tomas gargiulo</Text>
      <CronoComponent></CronoComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
});
