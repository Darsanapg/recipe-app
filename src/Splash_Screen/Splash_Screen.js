import * as React from 'react';
import { StyleSheet , View  , Image,  Dimensions,Text,Button } from 'react-native';
//import { color } from 'react-native-reanimated';
//import Login from './Screens/Login';

export default function Splash_Screen({navigation}){
    const Hide_Splash_Screen=() =>{
       navigation.reset({index:0,roots:[{name:"Login"}]}); 
       navigation.navigate('Login')
    }
    // setTimeout(() => {

    // },3000);
  return(
      <View>
       
 <Text style={{
        fontWeight:'bold',fontSize:60,
            color:'green',
          }}>
          COME!
          Let's Cook......
        </Text>
        {/* <Button
           title="Continue"
           onPress={Login}/> */}
          {/* <Text style={StyleSheet.blank_button_text}>SignUp</Text> */}
      
        <Image  source={require("../img/images.png")}
             style={{width: 500, height: 1000,}} /></View>
  );
}
    
  

const width=Dimensions.get("window").width;
const height=Dimensions.get("window").height;
const Style=StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'silver',
        justifyContent:'center',
        alignItems:'center',
        
    },
    logo:{
        height:height/0.8,
        width:width/0.8,
        resizeMode:'contain',
        alignItems:'center',
        justifyContent:'center',
    

    },
})