import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { QuranScreen } from './Screens/QuranScreen';
import { HadithScreen } from './Screens/HadithScreen';
import { HomeScreen } from './Screens/HomeScreen';
import { AboutUsScreen } from './Screens/AboutUsScreen';
import { QuranPakScreen } from './Screens/QuranPakScreen';
import { DetailsScreen } from './Screens/DetailsScreen';
import { KhawabScreen } from './Screens/KhawabScreen';
import { JadduCheckScreen } from './Screens/JadduCheckScreen';
import { IstekharaScreen } from './Screens/IstekharaScreen';
import { AnbiaDuaScreen } from './Screens/AnbiaDuaScreen';
import { NazarScreen } from './Screens/NazarScreen';
import { RohaniMasailScreen } from './Screens/RohaniMasailScreen';
import { JadduSeHifazatScreen } from './Screens/JadduSeHifazatScreen';
import { KarobariScreen } from './Screens/KarobariScreen';
import { KhawandBiviScreen } from './Screens/KhawandBiviScreen';
import { MasnonDuaScreen } from './Screens/MasnonDuaScreen';
import { QuraniDuaScreen } from './Screens/QuraniDuaScreen';
import { QuranSeekhiyeScreen } from './Screens/QuranSeekhiyeScreen';
import { LiveSessionFBScreen } from './Screens/LiveSessionFBScreen';
import { IslamiWazaifScreen } from './Screens/IslamiWazaifScreen';
import { SubhaShamScreen } from './Screens/SubhaShamScreen';
import { AuladScreen } from './Screens/AuladScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NavBar" screenOptions={{headerShown: false}}>
        <Stack.Screen name="NavBar" component={HomeTabs}/>
        <Stack.Screen name="Anbia Dua Screen" component={AnbiaDuaScreen}/>
        <Stack.Screen name="Aulad Screen" component={AuladScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Islami Wazaif Screen" component={IslamiWazaifScreen} />
        <Stack.Screen name="Istekhara Screen" component={IstekharaScreen} />
        <Stack.Screen name="Jaddu Check Screen" component={JadduCheckScreen} />
        <Stack.Screen name="Jaddu Se Hifazat Screen" component={JadduSeHifazatScreen} />
        <Stack.Screen name="Karobari Screen" component={KarobariScreen} />
        <Stack.Screen name="Khawab Screen" component={KhawabScreen} />
        <Stack.Screen name="Khawand Bivi Screen" component={KhawandBiviScreen} />
        <Stack.Screen name="Live Session FB Screen" component={LiveSessionFBScreen} />
        <Stack.Screen name="Masnon Dua Screen" component={MasnonDuaScreen} />
        <Stack.Screen name="Nazar Screen" component={NazarScreen} />
        <Stack.Screen name="Qurani Dua Screen" component={QuraniDuaScreen} />
        <Stack.Screen name="Quran Pak Screen" component={QuranPakScreen} />
        <Stack.Screen name="Quran Seekhiye Screen" component={QuranSeekhiyeScreen} />
        <Stack.Screen name="Rohani Masail Screen" component={RohaniMasailScreen} />
        <Stack.Screen name="Subha Sham Screen" component={SubhaShamScreen} />
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
