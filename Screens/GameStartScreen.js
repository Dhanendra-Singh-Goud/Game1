import { useState } from "react";
import { TextInput, View, StyleSheet,Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import Card from "./MainContainer";
import PrimaryButton from "./PrimaryButton";
import Tittle from "./Tittle";
import TextInstruction from "./TextInstruction";

function GameStartScreen({onPickNumber}){
    const[enteredNumber,setenteredNumber] = useState('')
    const{width , height} = useWindowDimensions();
    function numberInputHandler(enteredNumber){
        setenteredNumber(enteredNumber);
    }

    function resetInputHnadler(){
        setenteredNumber()
    }

    function confirmInputHandler(){
     const chooseNumber =parseInt(enteredNumber);
     if(isNaN(chooseNumber)|| chooseNumber <= 0 ||chooseNumber > 99){
     Alert.alert(
        'invalid number','number has to be number between 1 to 99',
        [{text:"okay", style:'destructive',onPress: resetInputHnadler}]
     );
     return;
    }
    onPickNumber(chooseNumber);
    }

    const topmarginDistance = height < 380 ? 20:80;
    return(
        <ScrollView style={styles.screen1}>
        <KeyboardAvoidingView style ={styles.screen1}>
        <View style={[styles.root , {marginTop:topmarginDistance}]}>
            <Tittle>My Guess Number</Tittle>
            <Card style ={styles.Container}>
            <TextInstruction>Enter a Number</TextInstruction>
            <TextInput style={styles.InputContainer}
             maxLength={10}
             keyboardType='number-pad'
             value={enteredNumber}
             onChangeText={numberInputHandler}/>
             <View style={styles.buttonContainer}>
            <View style={styles.buttonContainers}>
              <PrimaryButton onPress={resetInputHnadler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainers}>
              <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
            </View>
        </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

//  const deviceWidth = Dimensions.get("window").height
const styles = StyleSheet.create({
    screen1:{
        flex:1,
    },
    root:{
        flex:1,
        // marginTop:deviceWidth < 380 ?25:40,
        alignItems: "center",
        textAlign: "center",
    },
   
 InputContainer:{
    width:50,
    height:50,
    fontSize:25,
    borderBottomWidth:2,
    borderBottomColor:'#ffd700',
    textAlign:'center',
    marginVertical:4,
    fontWeight:'bold',
    color:'#ffd700',
    
 },
 buttonContainer:{
    flexDirection:'row'
 },
 buttonContainers:{
    flex:1
 }
})

export default GameStartScreen;


// import { useState } from 'react';
// import {View, TextInput,StyleSheet, Alert} from 'react-native'
// import PrimaryButton from './PrimaryButton';


// const GameStartScreen = ({OnpickupNumber}) =>{
// const [enteredText, setEnteredText] = useState(" ")

// function numberInputHandler(inputText){
// setEnteredText(inputText)
// }

// function resetInputHandler(){
//     setEnteredText(" ");
// }

// function confirmInputHandler(){
//    const  chooseNumber = parseInt(enteredText);

//    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber >100){
//     Alert.alert("Invalid number" ,
//         "Please enter a valid number between 1 to 99",
//     [{text:'Okay' , style:'destructive',onPress: resetInputHandler}]
// )
//     return ; 
//    }
//    OnpickupNumber(chooseNumber)

//  }
//     return(
//         <View style = {styles.container}>
//             <TextInput style = {styles.TextInputNumber}
//              maxLength = {2} 
//              keyBoardType="number-pad"
//              autoCorrect={false}
//              value = {enteredText}
//              onChangeText = {numberInputHandler}
//             />
//             <View style = {styles.btnContainer}>
//             <View style={styles.eachBtnContainer}>
//             <PrimaryButton
//              onPress={resetInputHandler} 
//              >Reset</PrimaryButton>
//             </View>
//             <View style={styles.eachBtnContainer}>
//             <PrimaryButton 
//             onBtnPress={confirmInputHandler}
//             >Confirm</PrimaryButton>
//             </View>
//             </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container:{
//      padding:20,
//      marginHorizontal:25,
//      marginTop:100,
//      backgroundColor:"grey",
//      borderRadius:10,
//      elevation:15,
//       justifyContent: 'center',
//       alignItems: 'center',
//     //  shadowColor:'black',
//     //  shadowOffset:{width:0.5, height:2},
//     //  shadowColor:"black",
//     //  shadowOpacity:0.75,
//     //  shadowRadius:7

//     },
//     btnContainer:{
//         flexDirection:"row",
//         width:250,
//         margin:10,
        
//     },
//     eachBtnContainer:{
//         flex: 1
//     },

//     TextInputNumber:{
//         borderBottomWidth:1.8,
//         borderColor:"black",
//         fontSize:30,
//         color:"black",
//         fontWeight:"bold",
//         width:50,
//         height:50,
//         marginBottom:10,
//         textAlign:"center",
        

//     }
// })
// export default GameStartScreen ;