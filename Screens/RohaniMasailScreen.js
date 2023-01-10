import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../Styles'

  export function RohaniMasailScreen({navigation}) {
    return (
      <View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 40}}/>
        <View style={styles.container2}>
            <TouchableOpacity 
                style={styles.button2}
                onPress={() => navigation.navigate('Khawand Bivi Screen')}>
                <Text style={styles.button2Text}>خاوند بیوی کے مسایل</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button2}
                onPress={() => navigation.navigate('Details')}>
                <Text style={styles.button2Text}>کالا جدو لیکچر</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container2}>
            <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Aulad Screen')}>
            <Text style={styles.button2Text}>اولاد کی بندش</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button2}
                onPress={() => navigation.navigate('Karobari Screen')}>
                <Text style={styles.button2Text}>کروبار کے مسایل</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }