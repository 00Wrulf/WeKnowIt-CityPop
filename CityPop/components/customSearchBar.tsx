import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

// Custom Searchfield

export default function cSearch ({ placeholder, onChange }) {
  return (
    <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChange} />
  )
}

// Styling

const styles = StyleSheet.create({
  input: {
    marginTop: 100,
    marginBottom: 50,
    height: 50,
    width: 375,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 20
  }
})
