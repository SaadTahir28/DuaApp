import * as React from 'react';
import {Text, View, ScrollView } from 'react-native';
import { Linking } from 'react-native';
import { aulad_ki_bandish } from '../ScreensData/AULAD_KI_BANDISH';

export const AuladScreen = () => {
  const linkify = (text) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/g;
    const matches = text.match(regex);
    if (matches) {
      matches.forEach((match) => {
        text = text.replace(match, `<a href="${match}">${match}</a>`);
      });
    }
    return text;
  }
  
  const html = linkify(aulad_ki_bandish);
  
  return (
    <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 20 }}/>
      <ScrollView style={{ padding: 20 }}>
        {html.split('\n').map((paragraph, i) => (
          <Text key={i}>
            {paragraph.split('<a').map((link, j) => {
              if (link.startsWith(' ')) {
                const url = link.split('"')[1];
                const linkText = link.split('<')[0].split('>')[1];
                return (
                  <Text key={j}>
                    <Text style={{color: 'blue'}} onPress={() => Linking.openURL(url)}>
                      <Text> {linkText}</Text>
                    </Text>
                  </Text>
                );
              } else 
              {
                return (
                  <Text key={j}>
                    {link}
                  </Text>
                );
              }
            })}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}



