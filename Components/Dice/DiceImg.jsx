import React, {useRef, useState} from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Animated, Easing, Text } from 'react-native'

function DiceImg() {
    const [spinValue, setSpinValue] = useState(new Animated.Value(0))
    const [dice, setDice] = useState(0)

    const randD6 = () => {
        const random = Math.floor(1 + Math.random() * (20 + 1 - 1))
        

        const spinHandler = () => {
            Animated.timing(
                spinValue,
              {
                toValue: 1,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true
              }).start(()=> spinValue.setValue(0))
        }
        setDice(random)
        spinHandler()
    }
    
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })

  return (
    <TouchableOpacity onPress={() => randD6() }>
    <View className={styles.container}>
        <Animated.Image
        width="150px"
        height="150px"
        style={{transform: [{rotate: spin}] }}
        source={require('../../assets/dice1.png')} />
        <Text
        style={styles.diceValue}
        >
        {dice}
        </Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        width: 30,
        height: 40
    },
    img: {
        width: 'null',
        height: 'null',
        resizeMode: 'contain',
    },
    diceValue: {
        color: "#005555",
        width: 50,
        fontSize: 35,
        fontWeight: "800",
        position: 'absolute',
        top: "35%",
        left: "34%",
        textAlign: "center"       
    }
  });

export default DiceImg