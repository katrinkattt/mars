import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainMarsExplorer from './src/screens/MainMarsExplorerScreen';
import FotoGalleryScreen from './src/screens/FotoGalleryScreen';
import { ScreenHeight, Colors } from './src/assets/Colors';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.main.accent,
    flex: 1,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={'light-content'} backgroundColor={backgroundStyle.backgroundColor} />
          <View style={{ height: ScreenHeight }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="MainMarsExplorer" component={MainMarsExplorer} />
              <Stack.Screen name="FotoGalleryScreen" component={FotoGalleryScreen} />
            </Stack.Navigator>
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
