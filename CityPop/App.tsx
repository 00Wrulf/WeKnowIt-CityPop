import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'

import Landing from './screens/home'
import cityS from './screens/citySearch'
import countryS from './screens/countrySearch'
import Result from './screens/result'
import CResult from './screens/cityResult'

enableScreens()
const Stack = createNativeStackNavigator()

// Screen control

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Landing} />
        <Stack.Screen options={{ title: 'City Search' }} name='citySearch' component={cityS} />
        <Stack.Screen options={{ title: 'Country Search' }} name='countrySearch' component={countryS} />
        <Stack.Screen options={{ title: 'Result' }} name='Result' component={Result} />
        <Stack.Screen options={{ title: 'Result' }} name='cityResult' component={CResult} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
