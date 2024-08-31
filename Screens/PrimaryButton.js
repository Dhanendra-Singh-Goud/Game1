import {View,Text, Pressable,StyleSheet} from 'react-native';

function PrimaryButton({children,onPress}){

    return(
        <View style={styles.ButtonOuterContainer}>
        <Pressable onPress={onPress}
        android_ripple={{color:`#696969`}}
        style={styles.ButtonInnerContainer}>
        <Text style={styles.ButtonText}>{children}</Text>
        </Pressable>
        </View>
    )
}
 const  styles = StyleSheet.create({
    ButtonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden',
        
    },
    ButtonInnerContainer:{
       backgroundColor:`#800000`,
       paddingHorizontal:20,
       paddingVertical:10,
       elevation:3,
    },
    ButtonText:{
        color:`#fff5ee`,
        textAlign:'center',
       
    }
 })
export default PrimaryButton;

// import {View, Text, StyleSheet, Pressable} from 'react-native';
// const PrimaryButton = ({children,onBtnPress})=>{
//     return (
//         <View style = {styles.Container}>
//         <Pressable 
            
//             style= {styles.Innercontainer}
//             android_ripple = {{color:"#696969"}}
//            onPress={onBtnPress}
//         //    onPress = {PressHandler}
//         //this is for IOS ripple-effect
//         //   style ={({pressed})=>pressed ?[styles.InnerContainer , styles.pressed]
//         //    : styles.InnerContainer}
//         //    onPress = {PressHandler} 
//         //    android_ripple ={{color:'#640233'}}
//         >
//             <Text style={styles.TextContainer}>{children}</Text>
//         </Pressable>
//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     Container:{
//         borderRadius:25,
//         margin:4,
//         overflow:'hidden',
//     },
//     Innercontainer:{
//         backgroundColor:"#800000",
//         // paddingHorizontal:0,
//         paddingVertical:8,
//         elevation:4,
//       },
//     TextContainer:{
//         textAlign:"center",
//         fontSize:20,
//         color:'#FFFFFF',
//     },
//     pressed:{
//         opacity:0.75
//     }
// })
// export default PrimaryButton;