import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native'
import Mac1 from './assets/2020-Macbook.png';
import Mac2 from './assets/2012-Macbook.png';
import Acer from './assets/2020-Acer.png';
import Dell from './assets/2019-Dell.png';
import List from './components/List';

export default function MainPage() {
  const data = [
    {
      imgUrl: Mac1,
      name: "2020 Macbook Pro",
      rating: 4.5,
      price: '1,299'
    },
    {
      imgUrl: Mac2,
      name: "2012 Macbook Pro",
      rating: 3,
      price: '299'
    },
    {
      imgUrl: Acer,
      name: "Acer Aspire 5",
      rating: 4,
      price: '549'
    },
    {
      imgUrl: Dell,
      name: "Inspiron 15 30",
      rating: 2.5,
      price: "349"
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
        <Text style={styles.title}>Laptops</Text>
        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Search Laptop" style={styles.input} />
          <TouchableOpacity>
            <Text style={styles.inputText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* List */}
      <ScrollView >
      <FlatList
      data={data}
      renderItem={(data) => <List data={data.item} />}
      keyExtractor={(index) => data.index}
      />
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
    backgroundColor: "#fff"
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
