import React from 'react'
import{SafeAreaView,View,Text,FlatList} from 'react-native'
import Listitem from'./components/Listitem'
import ListItem from './components/Listitem'
const mockData=[
    {id:5123, todo:"Ev temizlenecek",isDone:true},
    {id:3261, todo:"Çöpler Atılacak",isDone:false},
    {id:1232, todo:"Alışveriş Yapılacak",isDone:true},
]

const list=props =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
            <FlatList
            keyExtractor={(item, index)=>index.toString()}
            data={mockData}
            renderItem={({item})=>
            <ListItem myData={item}/>}
            />
            </View>
        </SafeAreaView>
    )
}
export default list