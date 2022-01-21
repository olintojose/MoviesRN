import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

import { useMovieDetails } from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';
import  Icon  from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends NativeStackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route, navigation }: Props) => {
    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const { isLoading, cast, movieFull} = useMovieDetails(movie.id);
    
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.posterImage}
                />
            </View>
            <View style={ styles.textContainer } >
                <Text style= { styles.subTitle}>{movie.original_title}</Text>
                <Text style= { styles.title } >{movie.title}</Text>
            </View>
            
                {
                    isLoading
                        ? <ActivityIndicator size={35} color="grey" style = {{ marginTop: 20}} />
                        : <MovieDetails movieFull= { movieFull! } cast= { cast } />
                }

                <View style = { styles.backButtom }>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                >

                 <Icon
                    color="white"
                    name="arrow-back-outline"
                    size= {35}
                    
                />     
                </TouchableOpacity> 
                </View>
                 
                
           

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    posterImage: {
        flex: 1,
       
    },
    imageContainer: {
        width: '100%',
        overflow: 'hidden',
        height: screenHeight * 0.70,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
            },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 10,

        borderBottomEndRadius:25,
        borderBottomStartRadius:25

    },
    textContainer:{
        marginHorizontal: 20,
        marginTop:20
    },
    subTitle: {
        fontSize:16,
        opacity:0.8
    },
    title: {
        fontSize:20,
        fontWeight: 'bold'
    },
    backButtom: {
        
       position: 'absolute',
        elevation:20,
        zIndex: 999,
        top: 15,
        left: 15
    } 

});
