import React from 'react';
import { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Modal, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default function Cart(){

    const [modalOpen, setModalVisible] = useState(false);

    return(
        <SafeAreaView>
            <Text>hi</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOpen}
                onRequestClose={() => {
                    // this.closeButtonFunction()
                }}>
                <View
                    style={{
                    height: '50%',
                    marginTop: 'auto',
                    backgroundColor:'blue'
                    }}>
                    <View >
                    <Text >This is Half Modal</Text>
                    </View>
                    <TouchableOpacity
                    
                    onPress={() => 
                        setModalVisible(false)}>
                    <Text>Close</Text>
                    </TouchableOpacity>
                </View>
                </Modal>

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text>hdljfoiejoi</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}