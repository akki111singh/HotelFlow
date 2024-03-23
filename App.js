
import {StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { NativeBaseProvider } from 'native-base';
import SearchScreen from './screens/SearchScreen';
import HotelsListScreen from './screens/HotelsListScreen';
import { linking } from './helper/linking';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer  linking={linking}>
      <Stack.Navigator initialRouteName="Hotels">
        <Stack.Screen name="Hotels" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="HotelsList" component={HotelsListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
