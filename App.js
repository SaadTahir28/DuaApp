import * as React from 'react';
import { Alert, StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { QuranScreen } from './Screens/QuranScreen';
import { HadithScreen } from './Screens/HadithScreen';
import { HomeScreen } from './Screens/HomeScreen';
import { AboutUsScreen } from './Screens/AboutUsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  function SomeButton() {
    Alert.alert("Some Button")
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs(){
  return (
      <Tab.Navigator>
        <Tab.Screen name="AnotherHome" component={HomeScreen} />
        <Tab.Screen name="Quran" component={QuranScreen} />
        <Tab.Screen name="Hadith" component={HadithScreen} />
        <Tab.Screen name="About Us" component={AboutUsScreen} />
      </Tab.Navigator>
  )
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
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
