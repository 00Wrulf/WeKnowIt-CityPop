import React, { useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Alert } from 'react-native'

import CSearch from '../components/customSearchBar'
import CButton from '../components/customButton'

import APICall from '../api/geonames'

const CitySearch = ({ navigation }) => {
  const [city, onChangeCity] = useState('Enter a city')
  const [isLoading, setLoading] = useState(false)

  const searchCity = () => { // Function to search for the given city. Sets Loading to true while searching
    setLoading(true)
    APICall.searchCity(city)
      .then(data => {
        if (data.geonames.length) {
          navigation.navigate('Result', data)
        } else { Alert.alert('No city found') }
      })
      .catch(
        er => Alert.alert('Error', 'Something went wrong, try again!')
      )
      .finally(
        () => setLoading(false)
      )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search a City</Text>
      <CSearch placeholder='Enter a City' onChange={onChangeCity} />
      <CButton text='Search' onPress={searchCity} />
      {isLoading && <ActivityIndicator />}

    </View>
  )
}

export default CitySearch

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 60,
    textAlign: 'center'
  },

  loader: {
    margin: 50
  }
})
