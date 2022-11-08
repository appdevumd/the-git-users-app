import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IansPage } from "./pages/IansPage";
import { DJsPage } from "./pages/DJsPage";
import { PatrickPage } from "./pages/PatrickPage";

// Add your import below!


function Home({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", fontSize: 40 }}>These people can use Git!</Text>

      <Button
        title="Ian"
        onPress={() => navigation.navigate("IansPage")}
      />
      <Button
        title="DJ"
        onPress={() => navigation.navigate("DJsPage")}
      />

      <Button
        title="Patrick"
        onPress={() => navigation.navigate("PatrickPage")}
      />

      {/* Add yourself below! */}

    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="IansPage" component={IansPage} />
        <Stack.Screen name="PatrickPage" component={PatrickPage} />

        {/* Add yourself below! */}
        <Stack.Screen name="DJsPage" component={DJsPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
