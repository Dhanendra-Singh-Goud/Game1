import { Children } from 'react';
import {Text,View,StyleSheet } from 'react-native';

function Tittle ({children}){
    return(
        <Text style = {styles.tittleScreen}>{children}</Text>
    )
}
export default Tittle ; 

const styles = StyleSheet.create({
    tittleScreen:{
        marginTop:15,
        padding:10,
        marginVertical:5,
        fontSize:24,
        fontFamily:'open-sans-bold',
        color:'yellow',
        borderWidth:2,
        borderRadius:12,
        borderColor:'white',
        textAlign:'center',
        maxWidth:"80%",
        width:300,
    }
})
// import { Children } from 'react';
// import {Text, StyleSheet} from 'react-native'
// function Title({children}){
//     return(
//         <Text style = {styles.title}>{children}</Text>
//     )
// }

// styles = StyleSheet.create({
//     title:{
//        fontSize:24,
//        color:'white',
//        fontWeight:'bold',
//        borderWidth:2,
//        borderColor:"#13817C",
//        borderRadius:10,
//        padding:10,
//        marginHorizontal:15,
//        textAlign:'center',
//        marginTop:15,
//        paddingHorizontal:18
//     }
// })

// export default Title;