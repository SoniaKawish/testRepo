import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    Button,
    TouchareOpacity,
    ScrollView,
    FlatList, ActivityIndicator
} from 'react-native';
// import { Card, Icon } from 'react-native-elements';
import { Dimensions } from 'react-native';
import ListItem from './ListItem';
import '../firebase.js';
import { getDatabase, ref, onValue, query, limitToLast, equalTo } from "firebase/database";
import { async } from '@firebase/util';

const HistoricalScreen = ({ navigation,route }) => {
    const selectedCategory=route.params;
    // get selected category data from DB

    // function getHistoricalPlaces() {
    // Get a reference to the database service 
    const db = getDatabase();
    let data = [];
    let placeList = [];
    const [arr, setArr] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    let dataList = [];

    useEffect(() => {
        async function fetchData() {
            const reference = ref(db, selectedCategory);
            // /Place_ID1 
            // const reference = query(ref(db, 'users'), equalTo('Raja Tamil'));
            console.log('before inside');
            onValue(reference, (snapshot) => {
                // data = snapshot.val();
                // placeList.push(data); 
                // console.log("referenced data: " + data);

                snapshot.forEach((child) => {
                    const itemId = child.val().Category + '/Place_ID' + child.val().ID
                    const imageTag=child.val().ImageURL.IMG1;
                    dataList.push({ name: child.val().Name, id: itemId, address: child.val().Address,image:imageTag });
                    console.log('inside');
                })

            });
            // await delay(3);
            if(dataList.length==0){
                await delay(3);
            }

            if(dataList.length>0){
                setisLoaded(true);
            }
            
            console.log('after delay');
            // }
            console.log(dataList);
            setArr(dataList);
        }
        fetchData();

    }, [])

    function delay(n) {
        return new Promise(function (resolve) {
            setTimeout(resolve, n * 1000);
        });
    }

    // async function myAsyncFunction(){
    //     //Do what you want here 
    //     console.log("Before the delay")

    //     await delay(5);

    //     console.log("After the delay")
    //     //Do what you want here too

    // }

    // myAsyncFunction();

    const eggs = [
        { name: 'Eggbert', id: '1' },
        { name: 'Eggman', id: '2' },
        { name: 'Eggmon', id: '3' },
    ];
    console.log(isLoaded);
    const detailsFunction = (itemClicked) => {
        console.log('inside function ' + itemClicked.id);
        navigation.navigate('Details', itemClicked.id);
    }
    const renderSeperator = () => (
        <View style={{ backgroundColor: 'black', height: 0.5 }}></View>
    );
    // const openDetails=()=>{
    //   console.log('detailsfun');
    // } 

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} backgroundColor="#04555c" />

            <View style={styles.header}>
                <Text style={styles.headerText}>{selectedCategory}</Text>
            </View>
            <View style={styles.listContainer}>
                {isLoaded ? (
                    <FlatList
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        data={arr}
                        ItemSeparatorComponent={renderSeperator}
                        renderItem={({ item }) => (
                            <ListItem item={item} pressHandler={detailsFunction} />
                        )}
                        style={styles.flatList}
                    />) : (<ActivityIndicator size="large" color="#04555c" 
                    style={styles.loaderStyle} />)}
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        height: 100,
        alignItems: 'center',
        backgroundColor: '#04555c',
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    listContainer: {
        backgroundColor: 'white',
        flexGrow: 0,
        height: Dimensions.get('window').height - 50,
    },
    flatList: {

    },
    footer: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#04555c',

    },
    loaderStyle:{ alignContent: 'center',
     justifyContent: 'center',
      marginTop: 200 
    }
    // item: {
    //   flex: 1,
    //   marginHorizontal: 10,
    //   marginTop: 20,
    //   fontSize: 24,
    //   padding: 10,
    // }, 
});
export default HistoricalScreen;
