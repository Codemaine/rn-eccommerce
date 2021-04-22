import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import StarRating from 'react-native-star-rating'

export default class List extends React.Component {
    render() {
        return (
            <View style={styles.container} >
            
                <View style={styles.item}>
                     <Image source={this.props.data.imgUrl} style={styles.itemFoto} />
                    
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{this.props.data.name}</Text>
                        <StarRating 
                           maxStars={5}
                           rating={this.props.data.rating}
                           fullStarColor={'#FFB000'}
                           starSize={14}
                        />
                        <Text style={styles.itemPrice}>${this.props.data.price}</Text>
                    </View>
                </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
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
      
    },
})