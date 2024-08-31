// import { View,Text,StyleSheet } from "react-native";
// import NumberContainer from "./NumberContainer";
// import { useState } from "react";
// import Tittle from "./Tittle";
// import PrimaryButton from "./PrimaryButton";

//  function RandomGenrateNumber(min,max,exclude){
//      const rndnum =Math.floor(Math.random()*(max - min) + min)

//      if(rndnum===exclude){
//         return RandomGenrateNumber(min,max,exclude)
//      }
//      else{
//         return rndnum ;
//      }
//  }

//  let minBoundry = 1
//  let maxBoundry = 100
// function GameScreen(userNumber){
//     const initialGuess = RandomGenrateNumber(minBoundry,maxBoundry,userNumber)
//     const [currentGuess,setCurrentGuess] =useState(initialGuess)

// function NextGuessHandler(direction){
// if(direction === 'lower'){
//     maxBoundry = currentGuess ;
// }
// else{
//     minBoundry = currentGuess+1
// }
//  const newrndnumber= RandomGenrateNumber(minBoundry,maxBoundry,currentGuess)
//  setCurrentGuess(newrndnumber)
// }    
//     return(
//        <View style={styles.screen}>
//         <Tittle>Opponent's Guess</Tittle>
//         <NumberContainer>{currentGuess}</NumberContainer>
//         {/* Guess */}
//         <View>
//            <PrimaryButton onPress={NextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
//            <PrimaryButton onPress={NextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
//         </View>
//         <View>
//             {/* log Round */}
//         </View>
//        </View>
      
//     )
// }

// const styles = StyleSheet.create({
//     screen:{
//         flex:1,
//         padding:20,
//     }
// })

// export default GameScreen;


import { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Alert, FlatList,ScrollView,useWindowDimensions} from 'react-native';
import PrimaryButton from './PrimaryButton'
import Title from './Tittle';
import NumberContainer from './NumberContainer';
import Card from './MainContainer';
import TextInstruction from './TextInstruction';
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessLogItem from './GuessLogItem';


function generatedRandomNumber(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max - min) + min);

    if(rndNum === exclude){
        return generatedRandomNumber(min, max, exclude);
    }else{
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
const initialGuess = generatedRandomNumber(1,100, userNumber)    
const [currentGuess, setCurrentGuess]=useState(initialGuess)
const [roundGuess, setRoundGuess]=useState([initialGuess])
let {width,height} = useWindowDimensions();

useEffect(()=>{
    if(currentGuess===userNumber){
        onGameOver(roundGuess.length)
    }
},[currentGuess,userNumber,onGameOver])

useEffect(()=>{
    minBoundary=1;
    maxBoundary=100;
},[])

function nextGuessHandler(direction){
if(
    (direction==='Lower' && currentGuess < userNumber)    
   || (direction==='Greater' && currentGuess > userNumber)  
){
    Alert.alert("Don't lie", "You know that is wrong number",
    [{text:'Sorry',style:'cancel'},
    ]);
    return;
}  
if(direction === 'lower'){
    maxBoundary = currentGuess;
}else{
    minBoundary= currentGuess+1
}
console.log(maxBoundary,minBoundary)
const newRndmNumber = generatedRandomNumber(minBoundary,maxBoundary,currentGuess)
setCurrentGuess(newRndmNumber)
setRoundGuess(prevGuessRounds =>[newRndmNumber,...prevGuessRounds])
}

const ListGuessRoundLength = roundGuess.length

let content =(
     <>
      <NumberContainer>{currentGuess}</NumberContainer>
       <Card>
        <TextInstruction style = {styles.InstructionText}>Higher or Lower</TextInstruction>
       <View style = {styles.buttonContainer}>
        <View style = {styles.buttonContainers}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
            <Ionicons name='md-add' size={24}/>
            </PrimaryButton>
        </View>
        <View style = {styles.buttonContainers}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
        <Ionicons name='md-remove' size={24}/>
        </PrimaryButton>
        </View>
       </View>
       </Card>
</>
);

if(width > 500){
    content = (
        <>
        <TextInstruction style = {styles.InstructionText}>Higher or Lower</TextInstruction>
        <View style = {styles.buttonwider}>
        <View style = {styles.buttonContainers}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
            <Ionicons name='md-add' size={24}/>
            </PrimaryButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style = {styles.buttonContainers}>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
             <Ionicons name='md-remove' size={24}/>
          </PrimaryButton>
        </View>
        </View>
        </>
    )
}
return(
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style = {styles.Screen}>
       <Title>Opponent's Guess</Title>
       {content}
       {/* <NumberContainer>{currentGuess}</NumberContainer>
       <Card>
        <TextInstruction style = {styles.InstructionText}>Higher or Lower</TextInstruction>
       <View style = {styles.buttonContainer}>
        <View style = {styles.buttonContainers}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
            <Ionicons name='md-add' size={24}/>
            </PrimaryButton>
        </View>
        <View style = {styles.buttonContainers}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
        <Ionicons name='md-remove' size={24}/>
        </PrimaryButton>
        </View>
       </View>
       </Card> */}
       {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
       <View style={styles.itemListContainer} >
        {/* {roundGuess.map(roundGuess =><Text key = {roundGuess}>{roundGuess}</Text>)} */}
        <FlatList
        data ={roundGuess}
        renderItem ={(itemData)=>(
        <GuessLogItem 
        roundNumber={ListGuessRoundLength - itemData.index}
         guess={itemData.item}
         />
        )}
        keyExtractor={(item) =>item.toString()}
        
        />
       </View>
    </View>
</ScrollView> 
   
)
}

const styles = StyleSheet.create({
    Screen:{
        Flex:1,
        padding:15,
       color:'white',
       textAlign:'center',
        alignItems: 'center'
        
    },
    scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
    buttonContainer:{
        flexDirection:'row'
     },
     buttonContainers:{
        flex:1
     },
     InstructionText:{
        marginBottom:15,
     },
     buttonwider:{
        flexDirection:'row',
        alignItems: 'center',
     },
     itemListContainer:{
        flex:1,
        // padding:16,
     },
    
})
export default GameScreen;

