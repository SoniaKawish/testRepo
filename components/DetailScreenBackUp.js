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
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
const {width}= Dimensions.get('screen');
import '../firebase.js';
import { getDatabase, ref, onValue,query, limitToLast,equalTo } from "firebase/database";


export default function DetailScreen({ navigation, route }) {
  let placeId = route.params;
  console.log('route '+placeId);
//   const imagedata=[];
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
            // let imageUrl={uri:'http://www.webdev.cs.uregina.ca/~sko505/Images/government-house.jpg'};
            // imagedata.push(  imageUrl );
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

console.log(placeDetails);
  const imagedata = [ 
     require('../assets/saskledge.jpg') ,
    require('../assets/saskledge.jpg')
  ];
  
  
  const Card=({place})=>{
    console.log('herere '+place);
    return(
      <ImageBackground style={styles.cardImage} source={place}></ImageBackground>
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
        <Icon name="place" size={28} color="#04555c" />
          <Text style={styles.locationText}>{placeDetails[0]}</Text>
        </View>
        
        <Text style={styles.detailText}>{placeDetails[2]}</Text>
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
    marginLeft: 3,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#04555c',
    marginTop:5
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
