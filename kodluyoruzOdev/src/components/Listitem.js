import React from 'react'
import {View,Text,StyleSheet} from'react-native'

const ListItem=props=>{
    return(
        <View style={[
            styles.container,
            {backgroundColor:props.myData.isDone ?"#FBC02D":"#FF5722"}
        ]}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={styles.dot}/>
            <Text style={styles.text}>{props.myData.todo}</Text>
            </View>
            {
            props.myData.isDone ?
             <Text>Tamamlandı!</Text>
            :
             <Text>Tamamlandı!</Text>
            }
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#5D4037',
        margin:5,
        padding:10,
        borderRadius:6,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        fontSize:20,
        

    },
    dot:{
        width:20,
        height:20,
        backgroundColor:'red',
        borderRadius:10
    },
})

export default ListItem