import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextInstruction = ({children,style}) => {
  return (
    <View>
      <Text style={[styles.instruction,style]}>{children}</Text>
    </View>
  )
}

export default TextInstruction

const styles = StyleSheet.create({
    instruction:{
      fontFamily:'open-sans',
    fontSize:24,
    color:'#ffd700'
    }
})