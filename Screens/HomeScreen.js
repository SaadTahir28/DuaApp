import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../Styles'

  export function HomeScreen({navigation}) {
    return (
      <View>
        <TouchableOpacity 
          style={styles.button1}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.button1Text}>Jaadu</Text>
        </TouchableOpacity>
        <View style={styles.container2}>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Khawab Screen')}>
            <Text style={styles.button2Text}>Khawab</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Details')}>
            <Text style={styles.button2Text}>Live Session FB</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Details')}>
            <Text style={styles.button2Text}>Istekhara</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Details')}>
            <Text style={styles.button2Text}>Rohani Masail</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Details')}>
            <Text style={styles.button2Text}>Nazar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Details')}>
            <Text style={styles.button2Text}>Islami Wazaif</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }