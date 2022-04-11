import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


export default function ListItem({ pressHandler, item }) {
    const placeImage = { uri: item.image };
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Image source={placeImage}
                    style={{
                        width: '50%', height: '50%', padding: 80, marginBottom: 10, marginRight: 10, marginLeft: 10, marginTop: 10
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => { pressHandler(item); }}
                    style={{ backgroundColor: 'white', width: 200, marginLeft: -20,marginTop:20 }}>
                    <Text style={styles.item}> {item.name}</Text>
                    <Text style={styles.address}> {item.address}</Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
}
const styles = StyleSheet.create({

    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 20,
        fontSize: 18, 
        padding: 10,
        fontWeight:'bold'
    },
    address: {
        fontSize:12,
        marginHorizontal: 10,
        paddingLeft:10
        // padding: 20, 
        // marginTop:10
    }
});