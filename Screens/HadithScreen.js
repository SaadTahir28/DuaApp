import * as React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import {styles} from '../Styles'

export function HadithScreen({navigation}) {
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
          <Text style={styles.button2Text}>Hadith Recording Link</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.button2Text}>Hadith Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}