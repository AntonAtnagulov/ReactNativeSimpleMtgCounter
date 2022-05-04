import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

function Reset({setPlayerTwo, setPlayerOne}) {

  const resetHandler = () => {
    setPlayerOne(20)
    setPlayerTwo(20)
  }

  return (
    <View style={{flex: 0.5}}>
    <TouchableOpacity
     onLongPress={resetHandler}
     style={styles.btn}
     title="RESET">
        <Text
        style={styles.btnText}>
            RESET
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
    }
  });

export default Reset