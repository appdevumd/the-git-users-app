import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IansPage } from "./pages/IansPage";

// Add your import below!
import { IansPage } from "./pages/DanielsPage";

function Home({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", fontSize: 40 }}>These people can use Git!</Text>

      <Button
        title="Ian"
        onPress={() => navigation.navigate("IansPage")}
      />

      {/* Add yourself below! */}
      <Button
        title="Daniel"
        onPress={() => navigation.navigate("DanielsPage")}
      />

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

        <Stack.Screen name="DanielsPage" component={DanielsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
