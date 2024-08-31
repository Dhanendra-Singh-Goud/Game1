import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const GuessLogItem = ({roundNumber,guess}) => {
  return (
    <LinearGradient  colors={["#C08B3A",'#5E4622']} style={styles.ListItem}>
      
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>{guess}</Text>
      
     </LinearGradient>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
    ListItem:{
        borderRadius:12,
        borderColor:'#A31D1D',
        borderWidth:1,
        textAlign:'center',
        // backgroundColor:'#C08B3A',
        elevation:5,
        marginVertical:8,
        padding:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        width:'100%',
    },
    itemText:{
        fontFamily:'open-sans-bold',
        color:"#922B21",
        fontSize:20,
    }
})