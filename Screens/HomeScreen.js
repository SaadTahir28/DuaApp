import * as React from 'react';
import {Text, ScrollView, Linking, StyleSheet, Button } from 'react-native';
import {ISTEKHARA_DATA, ISTEKHARA_DATA_LINK} from '../ScreensData/Data';


export function HomeScreen({navigation}) {
    return (
      <ScrollView>
        <Text style={styles.container}> 
          {ISTEKHARA_DATA}          
          {"\n"}
          <Text style={{color: 'blue'}} onPress={() => Linking.openURL(ISTEKHARA_DATA_LINK)}>
            {ISTEKHARA_DATA_LINK}
          </Text>
        </Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </ScrollView>
    );
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    padding: 20
  },
});