import React from 'react'
import { BackHandler, StyleSheet, Text, View } from 'react-native'

export default function ResultScreen ({ route, navigation }) {
  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>{route.params.geonames[0].name}</Text>
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>Population:</Text>
        <Text style={styles.cardPopulation}>{numberWithSpaces(route.params.geonames[0].population)}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
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

  cardContainer: {
    borderWidth: 2
  },

  cardText: {
    margin: 5,
    width: 400,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline'
  },

  cardPopulation: {
    padding: 10,
    height: 80,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 40,
    textAlign: 'center'
  }
})

function numberWithSpaces (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
