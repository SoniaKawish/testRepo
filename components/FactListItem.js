import React from 'react';
import { View, Text, Image,StyleSheet,ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-web';

export default function FactListItem({  item }) {
    return(
        <View style={{flex:1,height:200}}>
            <View style={styles.card}>
                <Text style={styles.item1}>{item.text1}</Text>
                <ScrollView>
                    <Text style={styles.item2}>{item.text2}</Text>
                </ScrollView>
                

            </View>

        </View>
    )

}
const styles=StyleSheet.create({
    card:{
        borderRadius:20,
        backgroundColor:'#778899',
        flex:1,
        padding:20,
        margin:15
    },
    item1:{
        fontSize:18,
        fontStyle:'italic',
        fontWeight:"bold",
        color:'white'
    }, 
    item2:{
        marginTop:10
    }
});