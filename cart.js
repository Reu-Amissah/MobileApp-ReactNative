import React from 'react';
import { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, Modal, StyleSheet, ScrollView, ImageBackground, Dimensions, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default function Cart({ navigation }){

    const [modalOpen, setModalVisible] = useState(false);
    const screen = Dimensions.get('window').height;

    return(
        <SafeAreaView style={styles.mdlView}>

            <View style={{flexDirection: 'row', paddingVertical: 10, margin: 20, marginBottom: -20}}>

                {/*----------modal close button----------- */}
                <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
                    <AntDesign name="swapleft" size={28} color="#e6c117" />
                </TouchableOpacity>

                <Text style={{fontWeight: '500', fontSize: 23, marginLeft: 20}}>Cart</Text>
                <View style ={{alignItems: 'flex-end', flex: 1, paddingRight: 5}}>
                    <TouchableOpacity>
                        <Feather name="shopping-bag" size={28} color='#e6c117'/>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ margin: 20}}>
                <TouchableOpacity style={{ marginVertical: 10, padding: 10, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row'}}>
                    <View style={styles.imageStyle} >
                        <ImageBackground
                            imageStyle={{ borderRadius: 10 }}
                            style={{width: '100%', height: 120,}}
                            source={
                                require('./assets/Idris.jpg')
                            }
                        >
                        </ImageBackground>
                    </View>

                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 26, fontWeight: '500', marginBottom: 30}}>Black Suits</Text>
                        <Text style={{color: 'grey', fontWeight: '500', marginBottom: 5}}>Price: $ 2000 </Text>
                        <Text style={{color: 'grey', fontWeight: '500', marginBottom: 5}}>Size: Large</Text>
                        <Text style={{color: 'grey', fontWeight: '500', marginBottom: 5}}>Color: Black</Text>
                    </View>

                    <View style={{alignItems: 'flex-end', flex: 1,}}>
                        <View style={{alignItems: 'flex-end',flexDirection: 'row', marginTop: 90, paddingHorizontal: 15, paddingVertical: 5, paddingTop: -1}}>
                            <TouchableOpacity style={{marginRight: 10}}>
                                <AntDesign name="minuscircle" size={22} color="#3b4d61" />
                            </TouchableOpacity>

                            <Text style={{fontSize: 22}}>1</Text>

                            <TouchableOpacity style={{marginLeft: 10}}>
                                <AntDesign name="pluscircle" size={22} color="#3b4d61" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 10, padding: 10, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row'}}>
                    <View style={styles.imageStyle} >
                        <ImageBackground
                            imageStyle={{ borderRadius: 10 }}
                            style={{width: '100%', height: 120,}}
                            source={
                                require('./assets/hoodies.jpg')
                            }
                        >
                        </ImageBackground>
                    </View>

                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 26, fontWeight: '500', marginBottom: 30}}>Hoodies</Text>
                        <Text style={{color: 'grey', fontWeight: '500', marginBottom: 5}}>Price: $ 850 </Text>
                        <Text style={{color: 'grey', fontWeight: '500', marginBottom: 5}}>Size: Large</Text>
                        <Text style={{color: 'grey', fontWeight: '500', marginBottom: 5}}>Color: Black</Text>
                    </View>

                    <View style={{alignItems: 'flex-end', flex: 1,}}>
                        <View style={{alignItems: 'flex-end',flexDirection: 'row', marginTop: 90, paddingHorizontal: 15, paddingVertical: 5, paddingTop: -1}}>
                            <TouchableOpacity style={{marginRight: 10}}>
                                <AntDesign name="minuscircle" size={22} color="#3b4d61" />
                            </TouchableOpacity>

                            <Text style={{fontSize: 22}}>1</Text>

                            <TouchableOpacity style={{marginLeft: 10}}>
                                <AntDesign name="pluscircle" size={22} color="#3b4d61" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableOpacity>
                
            </View>

            <View 
                style={{
                    position: 'absolute', 
                    bottom: 0, 
                    borderTopLeftRadius: 20, 
                    borderTopRightRadius: 20, 
                    backgroundColor: 'white', 
                    width: '100%', 
                    padding:20,
                    paddingBottom: 80,
                }}>
                    <View style={{borderBottomWidth: 2, borderBottomColor: '#e6c117', paddingBottom: 20}}>

                        <View style={{flex: 1, flexDirection: 'row', width: '100%', marginBottom: 10}}>
                            <Text style={{fontSize: 18, color: '#666666', fontWeight: '500', color: 'grey'}}>Total</Text>
                            <View style={{alignItems: 'flex-end', flex: 1}}>
                                <Text style={{fontWeight: '500', fontSize: 18}}>$ 480</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', width: '100%', marginBottom: 10}}>
                            <Text style={{fontSize: 18, color: '#666666', fontWeight: '500', color: 'grey'}}>VAT</Text>
                            <View style={{alignItems: 'flex-end', flex: 1}}>
                                <Text style={{fontWeight: '500', fontSize: 18}}>$ 80</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', width: '100%', marginBottom: 10}}>
                            <Text style={{fontSize: 18, color: '#666666', fontWeight: '500', color: 'grey'}}>Delivery fee</Text>
                            <View style={{alignItems: 'flex-end', flex: 1}}>
                                <Text style={{fontWeight: '500', fontSize: 18}}>$ 50</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{flex: 1, flexDirection: 'row', width: '100%', marginTop: 20}}>
                        <Text style={{fontSize: 18, color: '#666666', fontWeight: '500', color: 'grey'}}>Sub Total</Text>
                        <View style={{alignItems: 'flex-end', flex: 1}}>
                            <Text style={{fontWeight: '500', fontSize: 18}}>$ 1740</Text>
                        </View>
                    </View>

                    <TouchableOpacity 
                        style={{
                            marginTop: 30, 
                            width:'100%', 
                            borderRadius: 7, 
                            backgroundColor: 'black', 
                            alignItems: 'center', 
                            paddingVertical: 15
                        }}
                        onPress={() => setModalVisible(true)}
                        >
                        <Text style={{color: '#e6c117', fontSize: 18, fontWeight: '500'}}>Checkout</Text>
                    </TouchableOpacity>

            </View>

            {/*----------MODAL VIEW----------- */}
            <Modal 
                visible={modalOpen} 
                animationType={'slide'}
                transparent={true}
                >
                <SafeAreaView style={styles.mdlModView}>

                    <View style={{flexDirection: 'row', paddingVertical: 10}}>

                        {/*----------modal close button----------- */}
                        <TouchableOpacity onPress={() => setModalVisible(false)} >
                            <AntDesign name="closesquare" size={30} color="#e6c117" />
                        </TouchableOpacity>
                        <Text style={{color: 'white', fontSize: 22,paddingTop: 5, paddingLeft: 10}}>Choose a Payment Method</Text>
                    </View>
                     
                    

                    <View style={{ flexDirection: 'row', backgroundColor: '#e6e6e6', borderRadius: 15, width: '100%', padding: 10, marginTop: 10}}>
                        <Image 
                            source={require('./assets/masterCrd.png')}
                            style={{
                                width: '30%',
                                height: 70,
                                borderRadius: 15,
                                padding: 10,
                            }}
                            ></Image>

                        <View style={{marginLeft: 10, justifyContent: 'space-evenly'}}>
                            <Text style={{color: 'grey', fontSize: 15, fontWeight: '500'}}>Master Card</Text>
                            <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>Personal Account</Text>
                            <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>**** **** 7682</Text>
                        </View>

                        <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 10}}><AntDesign name="checkcircle" size={28} color="#e6c117" /></View>
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: '#e6e6e6', borderRadius: 15, width: '100%', padding: 10, marginTop: 15}}>
                        <Image 
                            source={require('./assets/Crd2.png')}
                            style={{
                                width: '30%',
                                height: 70,
                                borderRadius: 15,
                                padding: 10,
                            }}
                            ></Image>

                        <View style={{marginLeft: 10, justifyContent: 'space-evenly'}}>
                            <Text style={{color: 'grey', fontSize: 15, fontWeight: '500'}}>Home Card</Text>
                            <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>Personal Account</Text>
                            <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>**** **** 3261</Text>
                        </View>

                        <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 10}}><Entypo name="circle" size={28} color="#e6c117" /></View>
                    </View>

                    
                    <TouchableOpacity 
                        style={{
                            backgroundColor: '#3b4d61', 
                            width: '100%', 
                            alignItems: 'center', 
                            paddingVertical: 20, 
                            marginTop: 30,
                            marginBottom: 90,
                            borderRadius: 10,

                            }}>
                        <Text style={{fontWeight: '500', fontSize: 16, color: 'white'}}><FontAwesome name="plus" size={18} color="white" />  Add Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{
                            backgroundColor: '#e6c117', 
                            width: '100%', 
                            alignItems: 'center', 
                            paddingVertical: 20, 
                            borderRadius: 10,
                            }}>
                        <Text style={{fontWeight: '500', fontSize: 16, color: 'black'}}>Confirm Purchase</Text>
                    </TouchableOpacity>

                </SafeAreaView>
            </Modal>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    mdlView: {
        flex: 1,
        // padding: 20,
        backgroundColor: '#f2f2f2',
    },
    imageStyle: {
        width: '40%',
    },
    mdlModView: {
        height: '62%',
        marginTop: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.93)',
        paddingHorizontal: 20,
        paddingTop: 10,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
    }
})