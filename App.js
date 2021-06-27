import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View } from 'react-native';
import CarItem from './Component/CarItem';
import StyleButton from './Component/StyleButton';
import CarList from './Component/CarList';
import Header from './Component/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  carContainer:{
    width: '100%',
    height: '100%',


  },
  titles:{
    marginTop: '30%',
    width: '100%',
    alignItems: 'center'
  },
  title:{
    fontsize: 40,
    fontWeight: '500',



  },
  subtitle:{
    fontSize: 16,
    color: '#5c5e62 '

  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  }
});
