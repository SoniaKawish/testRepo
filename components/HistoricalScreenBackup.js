import React,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    Button,
    TouchareOpacity,
    ScrollView,
    FlatList,
} from 'react-native';
// import { Card, Icon } from 'react-native-elements';
import { Dimensions } from 'react-native';
import ListItem from './ListItem';
import '../firebase.js';
import { getDatabase, ref, onValue,query, limitToLast,equalTo } from "firebase/database";

const HistoricalScreen = ({ navigation }) => {

    // get historical data from DB

    // function getHistoricalPlaces() {
        // Get a reference to the database service 
        const db = getDatabase();
        let data=[];
        let placeList=[];
        const [arr,setArr] = useState([]);
        let dataList=[];
    
        
        const reference = ref(db, 'Historical'); 
        // /Place_ID1 
        // const reference = query(ref(db, 'users'), equalTo('Raja Tamil'));
        onValue(reference, (snapshot) => { 
            // data = snapshot.val();
            // placeList.push(data); 
            // console.log("referenced data: " + data);

            snapshot.forEach((child)=>{
                const itemId=child.val().Category+'/Place_ID'+child.val().ID
                dataList.push({ name: child.val().Name, id: itemId,address:child.val().Address });
                // child.val().Name

                 
              })
              
        }); 
    // }
    console.log(dataList);
    // setArr(dataList);
//     var numbers = [1, 4, 9];  
// var roots = numbers.map(Math.sqrt); 
// console.log("roots is : " + roots );
// console.log(placeList);
// placeList.forEach(element => {
//     console.log('inside foreach ');
//     console.log(element);
//     console.log(element.Address);
// });
    // let placeList=data.map(
    //       data.Ab.Intro
    //     ); 
    // console.log(placeList);
    
    // console.log(dataList);
    const eggs = [
        { name: 'Eggbert', id: '1' },
        { name: 'Eggman', id: '2' },
        { name: 'Eggmon', id: '3' },
        // { name: 'Eggmin', id: '4' },
        // { name: 'Eggzooo', id: '5' },
        // { name: 'Eggzom', id: '6' },
        // { name: 'Eggbert1', id: '7' },
        // { name: 'Eggbert2', id: '8' },
        // { name: 'Eggbert2', id: '9' },
        // { name: 'Eggbert2', id: '10' },
        // { name: 'Eggbert2', id: '11' },
        // { name: 'Eggbert5', id: '12' },
        // { name: 'Eggbert2', id: '13' },
        // { name: 'Eggbert2', id: '14' },
        // { name: 'Eggbert2', id: '15' },
        // { name: 'Eggbert78787', id: '16' },
        // { name: 'Eggbert2', id: '17' },
        // { name: 'Eggbert2', id: '18' },
        // { name: 'Eggbert0000', id: '19' },
        // { name: 'Eggbert78787', id: '20' },
        // { name: 'Eggbert2', id: '21' },
        // { name: 'Eggbert2', id: '22' },
        // { name: 'Eggbert9999', id: '23' },
    ];
    // console.log(eggs); 
    const detailsFunction = (itemClicked) => {
        console.log('inside function '+itemClicked.id);
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
                <Text style={styles.headerText}>Historical</Text>
            </View>
            <View style={styles.listContainer}>

                <FlatList
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    data={dataList}
                    ItemSeparatorComponent={renderSeperator}
                    renderItem={({ item }) => (
                        <ListItem item={item} pressHandler={detailsFunction} />
                    )}
                    style={styles.flatList}
                />
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
        fontSize: 20,
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
    // item: {
    //   flex: 1,
    //   marginHorizontal: 10,
    //   marginTop: 20,
    //   fontSize: 24,
    //   padding: 10,
    // }, 
});
export default HistoricalScreen;
