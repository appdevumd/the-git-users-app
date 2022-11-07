import { View, Text } from 'react-native';

export function evansPage() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 40 }}>Evan Masiello</Text>
        <Text>The goat. Not the treasurer of the club</Text>
        {/* <Image
            style={styles.tinyLogo}
            source={require('../assets/evanSlide.jpeg')}
        /> */}
      </View>
    );
  }
