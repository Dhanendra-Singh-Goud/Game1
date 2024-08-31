import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import GameStartScreen from './Screens/GameStartScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [userNumber,setUserNumber] = useState()
  const [IsGameOver, setIsGameOver] = useState(true)
  const [roundGuess, setRoundGuess] = useState(0)

   const [fontsLoading]= useFonts({
    'open-sans':require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/Fonts/OpenSans-Bold.ttf'),
  });
  if(!fontsLoading){
    return<AppLoading/>
  }

  function pickedupNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setIsGameOver(false)
  }

  function gameOverHandler(numberofRounds){
    setIsGameOver(true)
    setRoundGuess(numberofRounds)
  }
  function StatrtNewGameHandler(){
    setUserNumber(null);
    setRoundGuess(0)
  }

  let screen = <GameStartScreen
   onPickNumber={pickedupNumberHandler}
  />;
  if (userNumber){
    screen=<GameScreen
    userNumber={userNumber}
    onGameOver = {gameOverHandler}/>
  }
  if(IsGameOver && userNumber){
    screen = <GameOverScreen
    userNumber={userNumber}
    roundsNumber={roundGuess}
    OnStartNewGame={StatrtNewGameHandler}
    />
  }


  return (
    <>
     <StatusBar style='light' />
      <LinearGradient  colors={["#4e0329",'#daa520']}style={styles.rootScreen}>
      <ImageBackground source={require('./assets/dicebg.png')}
      resizeMode="cover"
      style = {styles.rootScreen}
      imageStyle = {styles.backgroundimg}
      >
      {screen}
      </ImageBackground>
      </LinearGradient>
      </>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundimg:{
    opacity:0.55
  }
});

// import { useState } from 'react';
// import {View, Text, StyleSheet,ImageBackground, } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import GameStartScreen from "./Screens/GameStartScreen";
// import GameScreen from "./Screens/GameScreen";

// const App = () =>{
//   const [userNumber, setUserNumber]=useState()

//   function pickUpHandler(pickupNumber){
//     setUserNumber(pickupNumber)
//   }

//   let screen = <GameStartScreen  
//   OnpickupNumber={pickUpHandler}/>

//   if(userNumber){
//     screen = <GameScreen />
//     // userNumber={userNumber}/>
//   }

// return(
//   <LinearGradient style = {styles.Container} colors={['#9C989E','#0A1D1C']}>
//     <ImageBackground 
//     source = {require('./assets/dicebg.png')}
//     resizemode = 'cover'
//     style = {styles.Container}
//     imageStyle = {styles.Background}
//     >
//    {screen}
//   </ImageBackground>
//   </LinearGradient>
// )
// }

// const styles = StyleSheet.create({
//   Container:{
//     flex:1,
//   },
//   Background:{
//     opacity:0.70
//   }
// })
// export default App;
