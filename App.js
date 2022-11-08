import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IansPage } from "./pages/IansPage";

// Add your import below!
import { RahulsPage } from "./pages/RahulsPage";


function Home({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", fontSize: 40 }}>These people can use Git!</Text>

      <Button
        title="Ian"
        onPress={() => navigation.navigate("IansPage")}
      />

      {/* Add yourself below! */}
      title="Rahul"
        onPress={() => navigation.navigate("RahulsPage")}
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

        {/* Add yourself below! */}
        <Stack.Screen name="RahulsPage" component={RahulsPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
