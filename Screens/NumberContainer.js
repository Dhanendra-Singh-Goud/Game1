import { View , Text, StyleSheet, Dimensions} from "react-native";

function NumberContainer({children}){
    return(
        <View style={styles.Container}>
            <Text style={styles.textStyle}>{children}</Text>
        </View>
    )
}
export default NumberContainer;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    Container:{
        padding:deviceWidth < 380 ? 12 : 15,
        borderRadius:8,
        borderColor:'#ffe4e1',
        borderWidth:2,
        textAlign:'center',
        margin:deviceWidth < 380 ? 12 : 15,
    },
    textStyle:{
        fontSize:deviceWidth < 380 ? 22 : 34,
        fontFamily:'open-sans',
        color:"#ffefd5",
        textAlign:'center',
        justifyContent:'center',
        
        
    }
})

// import { View, Text, StyleSheet} from 'react-native'
// function NumberContainer({children}){
//     return(
//         <View style = {styles.numberContainer}>
//             <Text style = {styles.TextContainer }>{children}</Text>
//         </View>
//     )
// }
// export default NumberContainer;

// const styles = StyleSheet.create({
//     numberContainer:{
//       borderWidth:4,
//       borderColor:"#13817C",
//       borderRadius:10,
//       padding:16,
//       margin:10,
//       alignItems: "center",
//       justifyContent:'center',
//       marginVertical:25,

//     },
//     TextContainer:{
//         color:'white',
//         FontSize:40,
//     },
// })