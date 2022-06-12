import React, { useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Alert } from 'react-native'

import CSearch from '../components/customSearchBar'
import CustomButton from '../components/customButton'

import APICall from '../api/geonames'

const CountrySearch = ({ navigation }) => {
  const [country, onChangeCountry] = useState('Enter a city')
  const [isLoading, setLoading] = useState(false)

  const searchCountry = () => { // Function to search for the given city. Sets Loading to true while searching
    setLoading(true)
    APICall.searchCountry(country)
      .then(data => {
        if (data.geonames.length) {
          APICall.searchCities(data.geonames[0].countryCode)
            .then(data => navigation.navigate('cityResult', data))
        } else { Alert.alert('No country found') }
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
      <Text style={styles.title}>Search a Country</Text>
      <CSearch placeholder='Enter a Country' onChange={onChangeCountry} />
      <CustomButton text='Search' onPress={searchCountry} />
      {isLoading && <ActivityIndicator />}

    </View>
  )
}

export default CountrySearch

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
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
