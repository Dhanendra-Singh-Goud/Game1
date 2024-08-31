import { View, StyleSheet, Dimensions } from 'react-native';

function Card({children}){
    return(
        <View style = {styles.Container}>
            {children}
        </View>
    )
}
export default Card;

const deviceWidth = Dimensions.get("window").width;

 const styles = StyleSheet.create({
    Container:{
        marginTop:deviceWidth < 380 ? 15:20,
        padding:20,
        marginHorizontal:10,
        backgroundColor:'#a0522d',
        borderRadius:10,
        elevation:12,
        alignItems:'center',
        justifyContent:'center',
        //this is for IOS
    //    { shadowColor:'black',
    //     shadowOpacity:0.30,
    //     shadowRadius:6,
    //     shadowOffset:{width:3,height:6}}
        },
})