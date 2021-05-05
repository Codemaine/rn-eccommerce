import React, { Component } from 'react'
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons, AntDesign } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';

import StarRating from 'react-native-star-rating'
import { useNavigation } from '@react-navigation/core';

export default function Single({ route })  {
    const navigation = useNavigation();
    //Destructuring route.params
    const { name, rating, imgUrl, price} = route.params
    
        return (
            <SafeAreaView style={styles.main_container}>
                <View style={styles.main}>
                    <View style={styles.topNav}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.topNavIcon}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={styles.doubleNavIcons}>
                            <View style={styles.topNavIcon}>
                                <AntDesign name="shoppingcart" size={24} color="#8A91F8" />
                            </View>
                            <View style={[styles.topNavIcon, { marginVertical: 20, position: "absolute", top: 50 }]}>
                                <AntDesign name="hearto" size={24} color="#8A91F8" />
                            </View>
                        </View>
                    </View> 
                    <View style={styles.ItemDetails}>
                    <Image source={imgUrl} style={styles.itemImage} />
                    <Text style={styles.ItemName}>{name}</Text>
                    <View style={styles.ItemRate}>
                        <Text style={styles.RateText}>Review : <StarRating
                            rating={rating}
                            maxStars={5}
                            fullStarColor="#f1c644"
                            emptyStarColor="#d4d4d4"
                            starSize={15}
                        />
                        </Text>
                    </View>
                    <View style={styles.Gradientbox}>
                        <LinearGradient
                            colors={['#7b68ee', '#7b68ee']}
                            start={{
                                x: 0,
                                y: 0
                            }}
                            end={{
                                x: 1,
                                y: 1
                            }}
                            style={styles.box} />
                    </View>
                    <Text style={styles.Description}>Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. </Text>
                    <View>
                        <LinearGradient
                            colors={['#ffffff', '#f8f4ff']}
                            start={{
                                x: 0,
                                y: 0
                            }}
                            end={{
                                x: 1,
                                y: 1
                            }}
                            style={styles.Materialbox} 
                        >
                            <Text style={styles.Material}>Material : 70% leather, 30% cotton</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.sizes}>
                        <TouchableOpacity style={styles.sizesButton}>
                            <Text style={styles.sizesText}>XS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sizesButton}><Text style={styles.sizesText}>S</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.sizesButton}><Text style={styles.sizesText}>M</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.sizesButton}><Text style={styles.sizesText}>L</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.sizesButton}><Text style={styles.sizesText}>XL</Text></TouchableOpacity>
                    </View>
                    <View style={styles.priceBox}>
                        <View style={styles.price}>
                            <Text style={styles.priceText}>Total Amount</Text>
                            <Text style={styles.priceFigure}>${price}</Text>
                        </View>
                        <View style={styles.CartBox}>
                            <Text style={styles.CartText}>Add to Cart</Text>
                        </View>
                    </View>

                </View>

                </View>
            </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: "#F8F4FF"
    },
    main: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    topNav: {
        width: "100%",
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    topNavIcon: {
        padding: 12,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,

        elevation: 5,

    },
    doubleNavIcons: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    itemImage: {
        alignSelf: "center",
        height: 300,
        width: 300
    },
    item: {
      paddingHorizontal: 80
    },
    itemTitle: {
         
    },
    title: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: "700"
      },
      ItemDetails: {
        marginTop: 25,
        padding: 10
    },
    ItemName: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    ItemRate: {
        paddingVertical: 10
    },
    RateText: {
        fontSize: 17,
        fontWeight: '500'
    },
    box: {
        width: '15%',
        height: 5,
        borderRadius: 3
    },
    Gradientbox: {
        marginVertical: 20
    },
    Description: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 15
    },
    Material: {
        color: '#7b68ee',
        paddingLeft: 30,
        fontWeight: '600'
    },
    Materialbox: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        marginLeft: -30
    },
    sizes: {
        flexDirection: 'row',
        marginTop: 25
    },
    sizesButton: {
        backgroundColor: '#ffffff',
        height: 40,
        width: 40,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderRadius: 10
    },
    sizesText: {
        fontWeight: 'bold'
    },
    priceBox: {
        flexDirection: 'row',
        backgroundColor: '#7b68ee',
        height: 80,
        borderRadius: 15,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    price: {
        justifyContent: 'center',
        margin: 25
    },
    priceText: {
        fontWeight: '400',
        color: '#fff',
        fontSize: 12
    },
    priceFigure: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    CartBox: {
        justifyContent: 'center',
        margin: 25,
        backgroundColor: '#6050dc',
        height: 35,
        borderRadius: 10,
        width: 100
    },
    CartText: {
        color:  '#fff',
        fontWeight: '600',
        alignSelf: 'center'
    }
})