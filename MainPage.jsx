import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native'
import blue_bag from './assets/blue-bag.png';
import red_bag from './assets/red-bag.png';
import black_bag from './assets/black-bag.png';
import green_bag from './assets/green-bag.png';
import List from './components/List';

export default function MainPage() {
  const data = [
    {
      imgUrl: blue_bag,
      name: "Blue Bag",
      rating: 4.5,
      price: '15'
    },
    {
      imgUrl: red_bag,
      name: "Red Bag",
      rating: 3,
      price: '23'
    },
    {
      imgUrl: black_bag,
      name: "Black Bag",
      rating: 4,
      price: '42'
    },
    {
      imgUrl: green_bag,
      name: "Green Bag",
      rating: 2.5,
      price: "30"
    }
  ]
  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.main}>
        {/* Top Navbar */}
        <View style={styles.topNav}>
          <View style={styles.topNavIcon}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
          <View style={styles.topNavIcon}>
            <AntDesign name="shoppingcart" size={24} color="#8A91F8" />
          </View>
        </View>
        {/* Title */}
        <Text style={styles.title}>Bags</Text>
        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Search Bags" style={styles.input} />
          <TouchableOpacity>
            <Text style={styles.inputText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* List */}
      <ScrollView>
          <View>
      <FlatList
      data={data}
      renderItem={(data) => <List data={data.item} />}
      keyExtractor={(index) => data.index}
      />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
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
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  topNavIcon: {
    padding: 12,
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
  title: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: "700"
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 15,
    height: 50,
    paddingHorizontal: 20,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 30,

    elevation: 1,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    height: 50,
    marginRight: 5,
    flexBasis: '90%'
  },
  inputText: {
    color: "#838CF8"
  },
  

});
