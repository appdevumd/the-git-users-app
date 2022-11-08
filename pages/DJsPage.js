import React, { useEffect, useState } from 'react'
import { View, Text, Linking, Button, Image } from 'react-native'

export function DJsPage() {
    const [time, setTime] = useState(0);

    function addDeg(val) {
        return val + "deg";
    }

    // good god please do not use this as an example for use in production code
    useEffect(() => {
        var animationFrame = undefined
        let animate = (elapsed) => {
            setTime(elapsed)
            animationFrame = requestAnimationFrame(animate)
        }
        animationFrame = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationFrame)
        }
    }, [])

    return (
        <View style={{ padding: 8 }}>
            <Text>DJ is very upset that this project does not use TypeScript</Text>
            <Text>DJ does not like Luke either for his lack of belief in TypeScript</Text>
            <Text>No matter</Text>
            <Text>I will teach TypeScript</Text>
            <Text>Eventually</Text>
            <Image style={{ 
                width: 250, 
                height: 250, 
                marginTop: 8, 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                transform: [{rotateY: addDeg(40 * Math.cos(0.0005 * time))}, {rotateX: "10deg"}]}} 
                source={{ uri: "https://xr.umd.edu/images/XR_Club_Logo_with_Outer_Circle.png" }} 
            />
            <Button onPress={() => Linking.openURL("https://xr.umd.edu")} title={"Join the XR Club\n(please)\n(I beg you)"} />
        </View>
    )
}