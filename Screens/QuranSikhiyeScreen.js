import * as React from 'react';
import { ScrollView, View, Text, Linking} from 'react-native';
import { QP_DATA } from '../ScreensData/QURAN_PAK_DATA';

export function QuranSikhiyeScreen() {
    const mappedData = QP_DATA.QP_DATA.map((data) => 
        <View key={data.name} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{data.name}</Text>
            <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL(data.link)}>
            Link
            </Text>
        </View>
    );

    return (
        <ScrollView>
            {mappedData}
        </ScrollView>
    );
}