
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CustomButton from '../components/customButton'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CityPop</Text>
      </View>

      <CustomButton text='Search by City' onPress={() => navigation.navigate('citySearch')} />
      <CustomButton text='Search by Country' onPress={() => navigation.navigate('countrySearch')} />

    </View>
  )
}

export default Home

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },

  header: {
    height: 250,
    width: 450,
    justifyContent: 'center',
    borderWidth: 1
  },

  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 60,
    textAlign: 'center'
  }
})
