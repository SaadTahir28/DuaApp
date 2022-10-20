import * as React from 'react';
import { Alert, StyleSheet, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QuranScreen } from './Screens/QuranScreen';
import { HadithScreen } from './Screens/HadithScreen';
import { HomeScreen } from './Screens/HomeScreen';
import { AboutUsScreen } from './Screens/AboutUsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  function SomeButton() {
    Alert.alert("Some Button")
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Quran" component={QuranScreen} />
        <Tab.Screen name="Hadith" component={HadithScreen} />
        <Tab.Screen name="About Us" component={AboutUsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 12,
  }
});
