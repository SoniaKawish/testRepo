import React from 'react';
import {View,Text,StyleSheet,ImageBackground,StatusBar,Button,TouchableOpacity} from 'react-native';
// import {Card,Icon} from 'react-native-elements';
const HomeScreen=({navigation})=>{
  const screenSelected='Historical';
  return(
    <View style={{flex:1}}>
    <StatusBar translucent backgroundColor="rgba(0,0,0,0)" /> 
    <ImageBackground 
    style={{flex:1}}
    source={require('../assets/saskledge.jpg')} 
    // source={require('../assets/homeScreen.jpg')}
    >
    <View style={styles.container}>
    <View style={{flex:3,flexDirection:'row',marginRight:5}}>
    <View style={[styles.cardStyleFirstRow]}>
    <TouchableOpacity style={styles.cardStyle} onPress={()=>navigation.navigate('Historical','Historical')}> 
   
          <Text style={styles.cardText} > 
            Historical
          </Text>
        </TouchableOpacity>

    </View>
    <View style={styles.cardStyleFirstRow}>
    <TouchableOpacity style={styles.cardStyle} onPress={()=>navigation.navigate('Historical','Recreational')}>
          <Text style={styles.cardText} >
            Recreational
          </Text>
       </TouchableOpacity>

    </View>
    </View>
    <View style={{flex:3,flexDirection:'row',marginTop:10,marginRight:5}}>
     <View style={[styles.cardStyleSecRow]}>
     <TouchableOpacity style={styles.cardStyle} onPress={()=>navigation.navigate('Historical','Restaurants')} >
          <Text style={styles.cardText} >
            Restaurants
          </Text>
    </TouchableOpacity>

    </View>
    <View style={[styles.cardStyleSecRow]}>
    <TouchableOpacity style={styles.cardStyle} onPress={()=>navigation.navigate('Historical','Must-Dos')}>
          <Text style={styles.cardText}>
            Must-Dos
          </Text>
          </TouchableOpacity>

    </View>
   
    
    </View>
    <View style={{flex:2,flexDirection:'row',marginTop:-330,width:200,marginLeft:90,marginBottom:35}}>
    <View style={[styles.cardStyleSecRow]}> 
    <TouchableOpacity style={styles.cardStyle} onPress={()=>navigation.navigate('FunFacts')}>
          <Text style={styles.cardText}>
            Fun-Facts
          </Text>
          </TouchableOpacity>
    </View>
    </View>
    </View>

    </ImageBackground>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignContent:'center',
    justifyContent:'center'
  },
  cardStyleFirstRow:{
    flex:1,
    justifyContent:'flex-end',
    alignContent:'center',
    borderRadius:50 
  },
  cardStyleSecRow:{
    flex:1,
    justifyContent:'flex-start',
    alignContent:'center'
  },
  cardStyle:{borderRadius:20,backgroundColor:'white',marginLeft:10,height:80,alignContent:'center',alignItems:'center'},
  cardText:{marginTop:35,fontWeight:'bold'}
})

export default HomeScreen; 