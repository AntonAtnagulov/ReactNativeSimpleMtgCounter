import React from 'react'
import { useState } from 'react'
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'

function Dice() {
    const [dice, setDice] = useState(0)

    const randD6 = () => {
        const random = Math.floor(1 + Math.random() * (20 + 1 - 1))
        setDice(random)
        setTimeout(() => {
            setDice(0)
        }, 4000);
    }
    
    return (
        <View style={{flex: 0.5}}>
            <TouchableOpacity
                onPress={randD6}
                style={styles.btn}>
                <Text
                    style={styles.btnText}>
                    ROLL D6: { dice !== 0 ? (dice) : null}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#069A8E',
        borderRadius: 10,
        borderColor: '#fff'
    },
    btnText: {
        padding: '10%',
        color: '#ffffff',
    },
  });

export default Dice