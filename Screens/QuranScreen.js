import * as React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import {styles} from '../Styles'

export function QuranScreen({navigation}) {
  return (
    <View>
      <View style={styles.container2}>
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.button2Text}>Jinnat Ka Zikr</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.button2Text}>Jaadu Ka Zikr</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.button2Text}>Quran Recording Link</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Quran Sikhiye Screen')}>
          <Text style={styles.button2Text}>Quran Sikhiye</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.button2Text}>Tarjama Quran</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.button2Text}>Quran Pak</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}