import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import Player from './components/Player/Player';
import GameMenu from './components/GameMenu/GameMenu';
import Players from './components/Player/Players';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Players/>
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
