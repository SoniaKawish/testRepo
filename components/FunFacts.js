import React, { useState, useEffect } from 'react';
import {View,Text,FlatList,StatusBar,StyleSheet,ActivityIndicator} from 'react-native';
import { Dimensions } from 'react-native';
import '../firebase.js';
import { getDatabase, ref, onValue, query } from "firebase/database";
import FactListItem from './FactListItem';


const FunFactScreen = ({ navigation,route }) => {
    // fetch data related to funfacts

    const db = getDatabase();
    const data=[];
    const [isLoaded, setisLoaded] = useState(false);
    const [dataList, setDataList] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const reference = ref(db, 'Fun-Facts');
            console.log('before inside');
            onValue(reference, (snapshot) => {

                snapshot.forEach((child) => {
                    data.push({ text1: child.val().Text1, id: child.val().ID, text2: child.val().Text2});
                    console.log('inside');
                })

            });
            if(data.length==0){
                await delay(2);
            }

            if(data.length>0){
                setisLoaded(true);
            }
            
            console.log('after delay');
            console.log(data);
            setDataList(data);
        }
        fetchData();

    }, [])

    function delay(n) {
        return new Promise(function (resolve) {
            setTimeout(resolve, n * 1000);
        });
    }

    return(
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} backgroundColor="#04555c" />

            <View style={styles.header}>
                <Text style={styles.headerText}>Fun Facts </Text>
            </View>
            <View style={styles.listContainer}>
                {isLoaded ? (<FlatList data={dataList}
                numColumns={1}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <FactListItem item={item}  />
                )}
                />):
                 (<ActivityIndicator size="large" color="#04555c" 
                    style={styles.loaderStyle} />)}

            </View>
        </View>
    )
}
styles=StyleSheet.create({
    header: {
        justifyContent: 'center',
        height: 100,
        alignItems: 'center',
        backgroundColor: '#04555c',
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    listContainer: {
        backgroundColor: 'white',
        flexGrow: 0,
        height: Dimensions.get('window').height - 50,
    },
    loaderStyle:{ alignContent: 'center',
     justifyContent: 'center',
      marginTop: 200 
    },
});
export default FunFactScreen;