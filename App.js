import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableNativeFeedbackBase, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const orange = () => {'#09faf4'}

  return (
  
    <View style={styles.header}>  

      {/*Main Image*/}        
      <Image 
        source={require('./assets/clothes1.jpg')} 
        style={{
          width: '70%', 
          height: 300, 
          borderRadius: 20, 
        }}></Image>

      {/*Welcome Text*/}
      <Text 
        style={{
          // alignItems: 'center', 
          // justifyContent: 'center', 
          paddingHorizontal: 40,
          marginTop: 60,
          fontSize: 20,
          color: '#7C8C8F',
          marginBottom: 10,
          marginLeft: -65,
          }}>
        Welcome to, {"\n"}
        <Text style={{fontWeight: 'bold', fontSize: 40, color: 'black'}}>DezynMania</Text>
      </Text>
      <Text style={{fontSize: 18, color: '#7C8C8F', marginLeft: -30,}}>kindly LOGIN, lets get you suited</Text>

      {/* <Text
        style={{
          color: 'black',
          fontSize: 40,
          fontWeight: 'bold',
          paddingTop: 5, 
          // borderBottomColor: '#6AA7B5',
          // borderBottomWidth: 3,
          // marginLeft: -80,
        }}>
          DezynMania
      </Text> */}


      {/*Login Button*/}
      <TouchableOpacity 
        style={{
          marginTop: 70, 
          backgroundColor: '#6AA7B5', 
          paddingHorizontal: 20, 
          paddingVertical: 10,
          borderRadius: '25%',
          width: '70%',
          alignItems: 'center',
          }}>
        <Text style={{color: 'white', fontSize: 20,}}> Let's GO <Feather name="arrow-right-circle" size={25} color="white"/> </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'ivory',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
