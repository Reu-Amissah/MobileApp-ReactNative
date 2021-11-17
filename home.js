import React from "react";
import { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Modal, Dimensions} from 'react-native';
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default function Home( {navigation} ){

    const [modalOpen, setModalVisible] = useState(false);
    const screen = Dimensions.get('window').height;

    return(
        <SafeAreaView style={styles.safeArea}>
            <View style = {{flexDirection: 'row'}}>
                <View>
                    <Text style={{color: '#3b4d61', fontSize: 40,}}>Best Quality</Text>
                    <Text style={{color: '#6b7bac', fontSize: 20,}}>Ideal Choice!</Text>
                </View>
                <View style ={{alignItems: 'flex-end', flex: 1, paddingTop: 15, paddingRight: 5}}>
                    <TouchableOpacity onPress = {() => navigation.navigate('Cart')}>
                        <Feather name="shopping-bag" size={28} color='#3b4d61'/>
                    </TouchableOpacity>
                    
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
                <SafeAreaView style={styles.mdlView}>

                    <View style={{flexDirection: 'row', paddingVertical: 10}}>

                        {/*----------modal close button----------- */}
                        <TouchableOpacity onPress={() => setModalVisible(false)} >
                            <AntDesign name="swapleft" size={28} color="#e6c117" />
                        </TouchableOpacity>

                        <Text style={{fontWeight: '500', fontSize: 23, marginLeft: 20}}>Details</Text>
                        <View style ={{alignItems: 'flex-end', flex: 1, paddingRight: 5}}>
                            <TouchableOpacity onPressOut ={() => setModalVisible(false)} onPress = {() => navigation.navigate('Cart')}>
                                <Feather name="shopping-bag" size={28} color='#e6c117'/>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/*----modal descriptions---------- */}
                    <View style={styles.dscImage} >
                        <ImageBackground
                            imageStyle={{ borderRadius: 5 }}
                            style={{width: '100%', height: screen/2.9,}}
                            resizeMode={'cover'}
                            source={
                                require('./assets/Idris.jpg')
                            }
                        >
                        </ImageBackground>


                        {/*-----modal description text-------- */}
                        <View>

                            <View style={{flexDirection: 'row'}}>
                                <View>

                                    <Text style={styles.itemModMain}>Black Suits</Text>
                                    <Text style={styles.itemSecond}>-by Black Superman</Text>

                                </View>

                                <View style={styles.priceInd}>
                                    <Text style={{fontSize: 25, fontWeight: '500',}}>$ 2000</Text>
                                </View>
                            </View>

                            {/*------modal view Item Sizes----------- */}
                            <View style={{marginTop: 10}}>
                                <View>
                                    <Text style={{fontSize: 18, fontWeight: '400', color: 'grey'}}>Choose Size</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <TouchableOpacity style={{padding: 18, borderWidth: 1, borderColor: '#e6e6e6', borderRadius: 5}}>
                                        <Text style={{fontSize: 20, fontWeight: '400', color: 'grey'}}>S</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{padding: 18, borderWidth: 1, borderColor: '#e6e6e6', borderRadius: 5, marginLeft: 8}}>
                                        <Text style={{fontSize: 20, fontWeight: '400', color: 'grey'}}>M</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{padding: 18, borderWidth: 1, borderColor: '#e6e6e6', borderRadius: 5, marginLeft: 8, backgroundColor: '#fff5cc'}}>
                                        <Text style={{fontSize: 20, fontWeight: '400', color: '#e6c117'}}>L</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{padding: 18, borderWidth: 1, borderColor: '#e6e6e6', borderRadius: 5, marginLeft: 8}}>
                                        <Text style={{fontSize: 20, fontWeight: '400', color: 'grey'}}>XL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>{/*------modal view Item Sizes 3ND----------- */}

                            <ScrollView>
                                <View style={{marginTop: 15, borderBottomWidth: 2, borderBottomColor: '#e6c117',paddingBottom: 10, width: '50%'}}>
                                    <Text style={{fontSize: 20, fontWeight: '400', color: '#e6c117'}}>Details</Text>
                                </View>
                                
                                <Text style={{marginTop: 10, fontSize: 16, fontWeight: '400', color: '#a6a6a6'}}>Quality and affordable products are all we have to other. 
                                    Suits made out of the finest materials man can find. 
                                    Made out of meteorite Rocks. 
                                    As silly as it sounds it the best you can actually get you be as invisible as Black Superman. 
                                    Some more dummy text here. Thanks for visiting our wonderful site.
                                </Text>

                                {/*---Add to cart button------ */}
                                <TouchableOpacity 
                                    style={{
                                        marginTop: 10,
                                        width: '100%', 
                                        borderRadius: 5, 
                                        backgroundColor: 'black', 
                                        alignItems: 'center', 
                                        paddingHorizontal: 10, 
                                        height: 50, 
                                        justifyContent: 'center'
                                    }} 
                                    onPressOut ={() => setModalVisible(false)}
                                    onPress = {() => navigation.navigate('Cart')}
                                >
                                    <Text style={{fontSize: 18, fontWeight: '500', color: 'white'}}>Add to cart</Text>
                                </TouchableOpacity>

                            </ScrollView>

                        </View>{/*-----modal description 3ND-------- */}

                    </View>

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
    },
    mdlView: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f2'
        //backgroundColor: '#3b4d61',
    },
    dscImage: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    itemModMain: {
        fontSize: 25,
        fontWeight: '500',
        marginTop: 15,
    },
    priceInd: {
        marginTop: 20,
        alignItems: 'flex-end',
        flex: 1,
    }
});