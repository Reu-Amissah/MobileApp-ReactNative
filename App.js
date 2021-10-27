import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableNativeFeedbackBase, View, Image } from 'react-native';

export default function App() {

  const orange = () => {'#09faf4'}

  return (
    <ScrollView>

        <View style={styles.header}>          
          <Text
            style={{
              color: 'black',
              fontSize: 20,
            }}>
              <FontAwesome5 name="shoe-prints" size={30} color= 'black'/>
                Con-Sole Footwear
          </Text>
        </View>

        <View
          >

        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#09faf4',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 180,
    
  }
});
