import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './reducers/store';
import Player from './components/Player/Player';
import GameMenu from './components/GameMenu/GameMenu';
import { FC } from 'react';
export default function App() {
  // const gameState = useSelector((state: RootState) => {
  //   return state.game
  // });
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Player color={'red'} number={1}/>
        <Player color={'blue'} number={2}/>
        <Player color={'pink'} number={3}/>
        <Player color={'green'} number={4}/>
        <Player color={'white'} number={5}/>
        <Player color={'gray'} number={6}/>
        <GameMenu/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function displayPlayers(numPlayers: number) {
  let players: JSX.Element[] = []
  for(let i = 0; i < numPlayers; i++) {
    players.push(
      <Player color={'black'} number={i}/>
    )
  }
}
