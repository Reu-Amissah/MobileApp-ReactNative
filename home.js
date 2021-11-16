import React from "react";
import { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default function Home( {navigation} ){

    const [modalOpen, setModalVisible] = useState(false);

    return(
        <SafeAreaView style={styles.safeArea}>
            <View style = {{flexDirection: 'row'}}>
                <View>
                    <Text style={{color: '#3b4d61', fontSize: 40,}}>Best Quality</Text>
                    <Text style={{color: '#6b7bac', fontSize: 20,}}>Perfect Choice!</Text>
                </View>
                <View style ={{alignItems: 'flex-end', flex: 1, paddingTop: 15, paddingRight: 5}}>
                    <Feather name="shopping-bag" size={28} color='#3b4d61'/>
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
                <View style = {styles.searchBar}>
                    <Feather name="search" size={24} color='#6b7bac' />
                    <TextInput placeholder="Search" style={{paddingLeft: 10}}></TextInput>
                </View>
                <View style={{padding: 10, marginTop: 7, backgroundColor: 'white', marginLeft: 7, borderRadius: 15}}>
                    <Ionicons name="ios-options" size={24} color="black" />
                </View>
            </View>

            {/*-------header scrollview-------*/}
            <View style={{marginBottom: 10}}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={{backgroundColor: '#3b4d61', paddingVertical: 10, borderRadius: '25%', paddingHorizontal: 25, marginTop: 10, marginRight: 5,}}>
                        <Text style={{color: 'white'}}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', paddingVertical: 10, borderRadius: '25%', paddingHorizontal: 25, marginTop: 10, marginRight: 5,}}>
                        <Text style={{color: '#3b4d61'}}>Suits</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', paddingVertical: 10, borderRadius: '25%', paddingHorizontal: 25, marginTop: 10, marginRight: 5,}}>
                        <Text style={{color: '#3b4d61'}}>Hoodies</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', paddingVertical: 10, borderRadius: '25%', paddingHorizontal: 25, marginTop: 10, marginRight: 5,}}>
                        <Text style={{color: '#3b4d61'}}>Shorts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', paddingVertical: 10, borderRadius: '25%', paddingHorizontal: 25, marginTop: 10, marginRight: 5,}}>
                        <Text style={{color: '#3b4d61'}}>Caps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', paddingVertical: 10, borderRadius: '25%', paddingHorizontal: 25, marginTop: 10, marginRight: 5,}}>
                        <Text style={{color: '#3b4d61'}}>Shoes</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>{/*------header scrollview end---------*/}

            {/*------------MODAL VIEW DESCRIPTION---------------*/}
            <Modal visible={modalOpen} animationType={'slide'}>
                <SafeAreaView>
                    <Text>hi there</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)}><Text>noiodfosdfhsdfo</Text></TouchableOpacity>
                </SafeAreaView>
                
            </Modal>


            {/*------main content/ items---------*/}
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={{ marginVertical: 10, padding: 10, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row'}}
                    onPress={() => setModalVisible(true)}>
                    <View style={styles.imageStyle} >
                        <ImageBackground
                            imageStyle={{ borderRadius: 10 }}
                            style={{width: '100%', height: 180,}}
                            source={
                                require('./assets/Idris.jpg')
                            }
                        >
                        </ImageBackground>
                    </View>

                    <View style={styles.descriptionStyle}>
                        <Text style={styles.itemMain}>Black Suit</Text>
                        <Text style={styles.itemSecond}>-by Black Superman</Text>
                        <Text style={styles.itemsDescribe}>Quality affordable suits from top production company</Text>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 20, fontWeight: '500'}}>$4,500</Text>
                            <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('Cart')}>
                                <Text>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 10, padding: 10, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row'}}
                    onPress={() => setModalVisible(true)}>
                    <View style={styles.imageStyle}>
                        <ImageBackground
                            imageStyle={{ borderRadius: 10 }}
                            style={{width: '100%', height: 180,}}
                            source={
                                require('./assets/shoe.jpg')
                            }
                        >
                        </ImageBackground>
                    </View>

                    <View style={styles.descriptionStyle}>
                        <Text style={styles.itemMain}>Leather Shoes</Text>
                        <Text style={styles.itemSecond}>-by Indigenous Leather</Text>
                        <Text style={styles.itemsDescribe}>Affordable leather shoes. Easy wear, and durable.</Text>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 20, fontWeight: '500'}}>$1,200</Text>
                            <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('Cart')}>
                                <Text>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 10, padding: 10, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row'}}
                    onPress={() => setModalVisible(true)}>
                    <View style={styles.imageStyle}>
                        <ImageBackground
                            imageStyle={{ borderRadius: 10 }}
                            style={{width: '100%', height: 180,}}
                            source={
                                require('./assets/shorts.jpg')
                            }
                        >
                        </ImageBackground>
                    </View>

                    <View style={styles.descriptionStyle}>
                        <Text style={styles.itemMain}>Men Shorts</Text>
                        <Text style={styles.itemSecond}>-by Downmen</Text>
                        <Text style={styles.itemsDescribe}>Quality shorts for all activities. Large color variety</Text>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 20, fontWeight: '500'}}>$2,100</Text>
                            <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('Cart')}>
                                <Text>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 10, padding: 10, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row'}}
                    onPress={() => setModalVisible(true)}>
                    <View style={styles.imageStyle}>
                        <ImageBackground
                            imageStyle={{ borderRadius: 10 }}
                            style={{width: '100%', height: 180,}}
                            source={
                                require('./assets/hoodies.jpg')
                            }
                        >
                        </ImageBackground>
                    </View>

                    <View style={styles.descriptionStyle}>
                        <Text style={styles.itemMain}>Hoodies</Text>
                        <Text style={styles.itemSecond}>-by DhopeHood</Text>
                        <Text style={styles.itemsDescribe}>Winter hoodies are here. Grab your now!</Text>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 20, fontWeight: '500'}}>$3,500</Text>
                            <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('Cart')}>
                                <Text>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 10, padding: 10, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row'}}
                    onPress={() => setModalVisible(true)}>
                    <View style={styles.imageStyle}>
                        <ImageBackground
                            imageStyle={{ borderRadius: 10 }}
                            style={{width: '100%', height: 180,}}
                            source={
                                require('./assets/caps.jpg')
                            }
                        >
                        </ImageBackground>
                    </View>

                    <View style={styles.descriptionStyle}>
                        <Text style={styles.itemMain}>Caps</Text>
                        <Text style={styles.itemSecond}>-by BaldManHero</Text>
                        <Text style={styles.itemsDescribe}>Neat fashion caps for all occasions. Black and white</Text>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 20, fontWeight: '500'}}>$1,800</Text>
                            <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('Cart')}>
                                <Text>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    safeArea: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f6f7f9'
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 8,
        padding: 10,
        borderRadius: 15,
        width: '85%',
    },
    imageStyle: {
        width: '40%',
    },
    descriptionStyle: {
        width: '60%',
        flexDirection: 'column',
        paddingHorizontal: 15,
    },
    itemMain: {
        fontSize: 23,
        color: '#3b4d61',
        fontWeight: '500'
    },
    itemSecond: {
        color: 'grey',
        fontWeight: '300'
    },
    itemsDescribe: {
        marginTop: 20,
        marginBottom: 40,
    },
    cartBtn: {
        marginLeft: 30,
        backgroundColor: '#e6c117',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20
    }
});