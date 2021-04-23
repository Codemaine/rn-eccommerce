import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import StarRating from 'react-native-star-rating'
import { useNavigation } from '@react-navigation/native';



export default function List(props)  {
        const navigation = useNavigation();
        return (
            <View style={styles.container} >
            
                <View style={styles.item}>
                     <Image source={props.data.imgUrl} style={styles.itemFoto} />
                    
                    <View style={styles.itemContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Single', {
                            name: props.data.name,
                            rating: props.data.rating,
                            imgUrl: props.data.imgUrl,
                            price: props.data.price
                        })}>
                        <Text style={styles.itemName}>{props.data.name}</Text>
                        </TouchableOpacity>
                        <StarRating 
                           maxStars={5}
                           rating={props.data.rating}
                           fullStarColor={'#FFB000'}
                           starSize={14}
                        />
                        <Text style={styles.itemPrice}>${props.data.price}</Text>
                    </View>
                </View>
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    item: {
        flexDirection: 'row'
    },
    itemContainer: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    itemPrice: {
        marginTop: 10,
        color: '#876bf6',
        fontWeight: 'bold',
        fontSize: 18
    },
    itemFoto: {
      height: 250,
      width: 250
    },
})