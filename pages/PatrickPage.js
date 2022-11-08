import { View, Text, Image, useWindowDimensions } from 'react-native';

export function PatrickPage() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require("../assets/flaggy.jpg")} style={{width:useWindowDimensions().width, height:500}}
        />
        <Text style={{ fontSize: 40 }}>This is Patrick's epic page</Text>
        <Text>You are supposed to see an image of me holding a flag.</Text>
      </View>
    );
  }
