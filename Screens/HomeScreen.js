import * as React from 'react';
import {Text, ScrollView, TouchableOpacity, View, StyleSheet, Button } from 'react-native';
import {ISTEKHARA_DATA, ISTEKHARA_DATA_LINK} from '../ScreensData/Data';
import { ThemeColor1, ThemeColor2 } from '../ThemeColor';


// export function HomeScreen({navigation}) {
//     return (
//       <ScrollView>
//         <Text style={styles.container}> 
//           {ISTEKHARA_DATA}          
//           {"\n"}
//           <Text style={{color: 'blue'}} onPress={() => Linking.openURL(ISTEKHARA_DATA_LINK)}>
//             {ISTEKHARA_DATA_LINK}
//           </Text>
//         </Text>
//         <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('Details')}
//         />
//       </ScrollView>
//     );
//   }

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
            onPress={() => navigation.navigate('Details')}>
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

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColor1,
    fontSize: 24,
    padding: 20,
  },
  button1: {
    backgroundColor: ThemeColor2,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  button1Text: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  container2:{
    flexDirection: "row" ,
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  button2: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: ThemeColor2,
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  button2Text: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase",
    textAlign: "center"
  },
});