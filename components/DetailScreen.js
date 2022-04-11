import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  FlatList,Image,
  Dimensions,ScrollView, Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
const {width}= Dimensions.get('screen');
import '../firebase.js';
import { getDatabase, ref, onValue,query, limitToLast,equalTo } from "firebase/database";
import openMap from 'react-native-open-maps';
import { createOpenLink } from 'react-native-open-maps';


export default function DetailScreen({ navigation, route }) {

  

  let placeId = route.params;
  console.log('route '+placeId);
  let imagesList=[];
//   get data about the place
// Get a reference to the database service 
const db = getDatabase();
// placeId='Historical/Place_ID2'; 
const placeDetails=[];
const reference = ref(db, placeId); 
onValue(reference, (snapshot) => { 
    snapshot.forEach((child)=>{
        if(child.val().Img1!=undefined  ){
            placeDetails.push(child.val().Img1);
            // imageUrl=child.val().Img1;
            imagesList.push( child.val().Img1 );
        }
        else if(child.val().Img2!=undefined){ 
            placeDetails.push(child.val().Img2);
            // imagedata.push( { name: require(child.val().Img2), id: '1' },);
        }
        else if(child.val().Img3!=undefined){
            placeDetails.push(child.val().Img3);
            // imagedata.push( { name: require(child.val().Img3), id: '1' },);
        }
        else{
            placeDetails.push(child.val());
        }
         
    })  
      
});

const openMaps=(address)=>{
  const addr = { query: address };
  const openYosemite = createOpenLink(addr);
}

console.log(placeDetails);
imagesList=placeDetails[4].IMG1;
console.log(Object.keys(placeDetails[4]).length);
// const addressForMaps=placeDetails[0];
const addressForMaps={ query: placeDetails[0] };  
const yosemite = { latitude: 37.865101, longitude: -119.538330 };
const openYosemite = createOpenLink(addressForMaps);
// let test='http://www.webdev.cs.uregina.ca/~sko505/Images/government-house.jpg';
let test=imagesList;
//   const imagedata = [ 
//     //  require('../assets/saskledge.jpg') ,
//     {uri:test},
//     require('../assets/saskledge.jpg')
//   ];
const imagedata=[]; 
imagedata.push({name:{uri:placeDetails[4].IMG1},id:1}); 
imagedata.push({name:{uri:placeDetails[4].IMG2},id:3})
imagedata.push({name:{uri:placeDetails[4].IMG3},id:2});


console.log(imagedata);  
    

  const Card=({place})=>{
    console.log('herere '+place.name); 
    return(
      <ImageBackground style={styles.cardImage} source={place.name}></ImageBackground>
    )
  } 
  
  return ( 
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <View style={{flex:0.6}}>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={imagedata} 
      renderItem={({item})=> <Card place={item} /> }
      />
      </View>
       <View style={styles.detailContainer}>
           {placeDetails[5]=="TRUE" ? (
               <View style={styles.iconContainer}>
               <Icon name="favorite" color="red" size={30} />
             </View>
           ): (<View></View>)}
        
        <View style={styles.locationContainer}>
        <Text style={{ marginTop: 0, fontWeight: 'bold', fontSize: 25 }}>
          {placeDetails[6]}
        </Text>
        </View>
        <View style={{flexDirection:'row',marginTop:2}}>
          <TouchableOpacity onPress={openYosemite} >
            <Icon name="place" size={28} color="#04555c" />
            <Text style={styles.locationText}>{placeDetails[0]}</Text>
            </TouchableOpacity>
        
        </View>
        <ScrollView style={{marginTop:0}}><Text style={styles.detailText}>{placeDetails[2]}</Text></ScrollView>
        
        
      </View>
      <View style={styles.footer}></View>
      
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  cardImage:{
    width:width,
    height:400
  },
  
  detailText: {
    marginTop: 20,
    lineHeight: 22,
  },
  locationText: {
    marginLeft: 29,  
    fontSize: 15,
    fontWeight: 'bold',
    color: '#04555c',
    marginTop:5,
    // position:'absolute',
    marginTop:-20
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 0,
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: 'white',
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 0.4,
  },
  imageStyle: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  imageText: {
    width: '70%',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#04555c',
    paddingHorizontal: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});
