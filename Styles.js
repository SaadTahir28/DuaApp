import { StyleSheet } from 'react-native';
import { ThemeColor1, ThemeColor2 } from './ThemeColor';

export const styles = StyleSheet.create({
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