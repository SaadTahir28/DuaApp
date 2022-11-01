import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { QuranScreen } from './Screens/QuranScreen';
import { HadithScreen } from './Screens/HadithScreen';
import { HomeScreen } from './Screens/HomeScreen';
import { AboutUsScreen } from './Screens/AboutUsScreen';
import { QuranSikhiyeScreen } from './Screens/QuranSikhiyeScreen';
import { DetailsScreen } from './Screens/DetailsScreen';
import { KhawabScreen } from './Screens/KhawabScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NavBar">
        <Stack.Screen name="NavBar" component={HomeTabs}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Quran Sikhiye Screen" component={QuranSikhiyeScreen} />
        <Stack.Screen name="Khawab Screen" component={KhawabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs(){
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Quran" component={QuranScreen} />
        <Tab.Screen name="Hadith" component={HadithScreen} />
        <Tab.Screen name="About Us" component={AboutUsScreen} />
      </Tab.Navigator>
  )
}
