import React from "react";

import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
    HomeScreen: undefined;
    DetailScreen: Movie;
}

const Stack = createNativeStackNavigator<RootStackParams> ();

export const Navigation = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle:{
                  //  backgroundColor: 'white'
                }

            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    )
}
