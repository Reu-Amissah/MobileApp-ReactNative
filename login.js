import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableNativeFeedbackBase, View, Image, TouchableOpacity, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function Login() {

  // const orange = () => {'#09faf4'}

  return (
  
    <View style={styles.header}> 
      <View style={styles.titleText}>
        <ImageBackground source={ require('./assets/vectorMain2.jpg')} resizeMode='contain' 
          style={{height: 300, width: 420, marginTop: -10,}}
          // imageStyle={{ borderRadius: 10}}
          >
            <View style = {{alignItems: 'center', marginTop: 160,}}>
              <Text 
                style={{
                  fontSize: 50, 
                  fontWeight: 'bold', 
                  textShadowColor: '#fce3fa ',
                  textShadowOffset: {width: 0.5, height: 0.5},
                  textShadowRadius: 4,
                }}
                  >
                    DezynMania</Text>
            </View>
        </ImageBackground>
      </View>

        {/*----Login Form------*/}
      <View style={styles.userIpt}>

          {/*======login Header=====*/}
        <Text style={{fontSize: 30, fontWeight: 'bold'}}><AntDesign name="login" size={24} color="black"/> Login</Text>
        <Text style={{color: '#7C8C8F', marginBottom: 50,}}>Enter your details to <Text style={{fontWeight: 'bold'}}> securely login</Text></Text>

          {/*---Username input & labels----*/}
        <Text style={{fontSize: 18,}}>Username: </Text>
        <View style={{flexDirection: 'row', marginTop: 15, borderBottomWidth: 1.5, borderBottomColor: '#4d6bb0', width: '90%'}}>
          <Feather name="user" size={24} color="#4d6bb0" />
          <TextInput style={styles.userInput} placeholder="@Username"></TextInput>
        </View>
        
            {/*---Password input & labels----*/}
        <Text style={{fontSize: 18, marginTop: 20,}}>Password: </Text>
        <View style={{flexDirection: 'row', marginTop: 15, borderBottomWidth: 1.5, borderBottomColor: '#4d6bb0', width: '90%'}}>
          <MaterialCommunityIcons name="shield-key-outline" size={24} color="#4d6bb0" />
          <TextInput style={styles.userInput} placeholder="Password" secureTextEntry={true}></TextInput>
        </View>

        <TouchableOpacity style={{alignItems: 'flex-end', marginTop: 15, marginRight: 30,}}>
          <Text style={{color: '#4d6bb0'}}>forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginBtn}>
        <TouchableOpacity 
          style={{
            backgroundColor: '#6AA7B5',
            width: '80%',
            alignItems: 'center',
            paddingVertical: 13,
            borderRadius: 5,
          }}
          >
          <Text style={{ fontSize: 18, }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{color: '#4d6bb0', marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Create Account</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'ivory',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titleText: {
    // alignItems: 'center',
    height: 300,
    width: 300,
    // alignItems: 'center', 
    // justifyContent: 'center',
  },
  userIpt: {
    // justifyContent: 'flex-start',
    padding: 20,
    marginLeft: 20,
  },
  userInput: {
    width: '90%',
    height: 30,
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 15
    // marginTop: 20,
    // marginBottom: 10,
  }, 
  loginBtn: {
    // marginLeft: 40,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
