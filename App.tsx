import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import Player from './components/Player/Player';
import GameMenu from './components/GameMenu/GameMenu';
export default function App() {
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
  testView: {
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'black'
  }
});
