/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,Image,
} from 'react-native'
import MyButton from "./components/MyButton"


const App = () => {
  

  const onSign=()=>{
    console.log("Sign Pressed")
  }
  const onLogin=()=>{
    console.log("Login Pressed")
  }
  
  return (
    
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
        <Image
        source={require("./asset/tel.png")}
        />
        <View style={styles.inputContainer}>
        <TextInput 
        keyboardType="email-address" 
        autoCapitalize="none"
        placeholder="E posta giriniz.."
        />
        </View>
        
        <View style={styles.inputContainer}>
        <TextInput 
        autoCapitalize="none"
        placeholder="Şifre giriniz.."
        secureTextEntry={true}
        />
        </View>
      
        <TouchableOpacity>
        <MyButton 
         myTitle={"Giriş Yap"}
          myPress={onSign}
        ></MyButton>
        <MyButton 
        myTitle={"Kayit Ol"}
        myPress={onLogin}></MyButton>
        </TouchableOpacity>
      
        </View>
      </SafeAreaView>
  
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
  },

  inputContainer:{
    backgroundColor:'#eceff1',
    padding:10,
    margin:20,
    borderRadius:10,
    width:Dimensions.get("window").width/1.3
  },
  butonContainer:{

    backgroundColor:'#546e7a',
    width:Dimensions.get("window").width/2,
    alignSelf:'center',
    padding:15,
    },
    textStyle:{
      color:'white',
          
    }
});

export default App;
