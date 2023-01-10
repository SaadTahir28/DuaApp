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
          <Text style={styles.button2Text}>جنات کا ذکر</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.button2Text}>جادو کا ذکر</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.button2Text}>حدیث ریکارڈنگ کا لنک</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.button2Text}>حدیث کی کتاب</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}