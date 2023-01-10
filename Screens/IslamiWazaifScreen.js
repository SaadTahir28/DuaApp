import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../Styles'

  export function IslamiWazaifScreen({navigation}) {
    return (
      <View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 40}}/>
        <View style={styles.container2}>
            <TouchableOpacity 
                style={styles.button2}
                onPress={() => navigation.navigate('Details')}>
                <Text style={styles.button2Text}>سبھ شام کا اذکار</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button2}
                onPress={() => navigation.navigate('Qurani Dua Screen')}>
                <Text style={styles.button2Text}>قرآنی دعائیں</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container2}>
            <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Masnon Dua Screen')}>
            <Text style={styles.button2Text}>مسنون اذکار او دعائیں</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button2}
                onPress={() => navigation.navigate('Jaddu Se Hifazat Screen')}>
                <Text style={styles.button2Text}>جادو سے حفاظت کا عمل</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }