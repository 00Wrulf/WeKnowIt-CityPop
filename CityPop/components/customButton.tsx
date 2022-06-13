import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// Custom button function

export default function CustomButton ({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}> {text} </Text>
    </TouchableOpacity>
  )
}

// Styling

const styles = StyleSheet.create({
  button: {
    margin: -1,
    height: 250,
    width: 450,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderWidth: 1
  },

  buttonText: {
    textDecorationLine: 'underline',
    color: 'black',
    textTransform: 'uppercase',
    fontSize: 18,
    textAlign: 'center'
  }
})
