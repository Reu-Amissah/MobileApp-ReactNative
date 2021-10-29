import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableNativeFeedbackBase, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Welcome'

export default function App() {

  const orange = () => {'#09faf4'}

  return (
  
    <Welcome/>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
});
