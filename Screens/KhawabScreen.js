import * as React from 'react';
import { ScrollView, View, Text, Linking} from 'react-native';
import { Kh_Data, Kh_Link_Data } from '../ScreensData/KHAWAB_DATA';

const lineBreak = "\n"

export function KhawabScreen() {
    const mappedData = Kh_Link_Data.Kh_Link_Data.map((data) => 
        <View key={data.name}>
            <Text>{data.urdu}</Text>
            <Text>{data.name}</Text>
            <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL(data.link)}>
            {data.link}
            {lineBreak}
            </Text>
        </View>
    );

    return (
        <View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 20 }}/>
            <ScrollView style={{ padding: 20 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>{Kh_Data}</Text>
                </View>
                <View style={{margin: 20}}>
                    {mappedData}
                </View>
            </ScrollView>
        </View>
    );
  }