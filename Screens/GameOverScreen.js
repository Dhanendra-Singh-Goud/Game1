import { View, Text, Image, StyleSheet, ScrollView , useWindowDimensions } from 'react-native' 
import Tittle from './Tittle';
import PrimaryButton from './PrimaryButton';


function GameOverScreen({roundsNumber, userNumber, OnStartNewGame}){
   const { width, height} = useWindowDimensions();

   let imageSize = 300;

   if(width <380){
    imageSize = 150;
   }
   if(height <400){
    imageSize = 100;
   }

   const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2,
   };

    return(
      <ScrollView style = {styles.screen}>
      <View style = {styles.container}>
        <Tittle> Game Over!!</Tittle>
        <View style={[styles.imageContainer,imageStyle]}>
        <Image style={styles.Image} 
        source = {require("../assets/Success.jpg")} />
        </View>
        <Text style = {styles.SummaryText}>
          Your Phone needed 
          <Text style={styles.highlight}>  {roundsNumber}  </Text> rounds to guess the number 
          <Text style={styles.highlight}>  {userNumber} </Text>
        </Text>
        <PrimaryButton onPress={OnStartNewGame}>Start New Game</PrimaryButton>
       
      </View>
      </ScrollView>
    )
}
export default GameOverScreen;

// const deviceWidth= Dimensions.get('window').width

 
const styles = StyleSheet.create({
  Screen:{
    flex: 1,
  },
    container: {
        flex:1,
        padding:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer:{
      //  width:deviceWidth < 380 ? 150: 300,
      //  height:deviceWidth < 380 ? 150: 300,
      //  borderRadius:deviceWidth < 380 ? 75: 150,
       borderWidth:3,
       boderColor:'brown',
       overflow:'hidden',
       margin:26,
    },
    Image:{
        width:'100%',
        height:'100%',
    },
    SummaryText:{
     fontFamily:'open-sans',
     fontSize:24,
     color:'#07F6EB',
     marginVertical:20,
     textAlign:'center',
    },
    highlight:{
      fontFamily:'open-sans-bold',
      
    }
  })