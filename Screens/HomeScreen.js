import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../Styles'

  export function HomeScreen({navigation}) {
    return (
      <View>
        <TouchableOpacity 
          style={styles.button1}
          onPress={() => navigation.navigate('Jaddu Check Screen')}>
          <Text style={styles.button1Text}>کیا آپ پر جادو ہے؟ جادو کہیں خود چیک کریں</Text>
        </TouchableOpacity>
        <View style={styles.container2}>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Nazar Screen')}>
            <Text style={styles.button2Text}>نظر بند</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Islami Wazaif Screen')}>
            <Text style={styles.button2Text}>اسلامی وظیفہ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Istekhara Screen')}>
            <Text style={styles.button2Text}>استخارہ</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Rohani Masail Screen')}>
            <Text style={styles.button2Text}>روحانی مسایل اور انکا حل</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Live Session FB Screen')}>
            <Text style={styles.button2Text}>Live Session FB</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Khawab Screen')}>
            <Text style={styles.button2Text}>خواب کی تعبیر</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }