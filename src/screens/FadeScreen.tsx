import React, { useRef } from 'react'
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View
                style={{
                    backgroundColor: '#08aF6A',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 10,
                    marginBottom: 10,
                    opacity,
                }}
            />
            <Button 
            onPress={fadeIn}
            title="FadeIn"
                    
            >

            </Button>
            <Button 
            onPress={fadeOut}
            title="FadeOut"
                    
            >

            </Button>
           
        </View>
    )
}
