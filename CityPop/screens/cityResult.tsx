import React, { useState } from 'react'
import { StyleSheet, Text, View, Alert, TouchableOpacity, ActivityIndicator } from 'react-native'

import APICall from '../api/geonames'

// Biggest cities

export default function CityResult ({ route, navigation }) {
  const [currCity, onChangeCity] = useState(null)
  const [isLoading, setLoading] = useState(false)

  // Uses the data from countrySearch to get the specific cities, error messages if error occurs
  const searchCity = (city) => {
    setLoading(true)
    onChangeCity(city)
    APICall.searchCity(city)
      .then(
        data => navigation.navigate('Result', data)
      )
      .catch(
        er => Alert.alert('Error', 'Something went wrong, try again!')
      )
      .finally(
        () => setLoading(false)
      )
  }

  // View for the cities page, route part creates a view style for each card
  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>{route.params.geonames[0].countryName}</Text>
      </View>

      <View>
        {route.params.geonames.map((city) => {
          return (
            <TouchableOpacity key={city.geonameId} onPress={() => searchCity(city.name)}>
              <Text style={styles.cardText}>{city.name}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      {isLoading && <ActivityIndicator />}
    </View>
  )
}

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
    justifyContent: 'center'
  },

  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 60,
    textAlign: 'center'
  },

  cardText: {
    padding: 18,
    margin: 5,
    height: 80,
    width: 400,
    backgroundColor: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 2,
    fontSize: 30,
    textDecorationLine: 'underline'
  }
})
