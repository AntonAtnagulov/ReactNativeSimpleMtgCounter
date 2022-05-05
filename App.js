import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Reset from './Components/Reset/Reset';
import PlayerOne from './Components/PlayerOne/PlayerOne';
import PlayerTwo from './Components/PlayerTwo/PlayerTwo';
import Dice from './Components/Dice/Dice';
import DiceImg from './Components/Dice/DiceImg';

export default function App() {
  const [playerOne, setPlayerOne] = useState(20)
  const [playerTwo, setPlayerTwo] = useState(20)

  return (
    <View style={styles.container}>
      <PlayerOne playerOne={playerOne} setPlayerOne={setPlayerOne} />
      <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
      <Reset setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo}/>
      <DiceImg/>
      <Reset setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo}/>
      </View>
      <PlayerTwo playerTwo={playerTwo} setPlayerTwo={setPlayerTwo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005555",
    justifyContent: "space-around",
  },
});
