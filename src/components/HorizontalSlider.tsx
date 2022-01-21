import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { FlatList, Text, View } from 'react-native';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }) => {
    return (
  
        <View style={{ 
            
            height: (title) ? 190 : 181 }}>
            { 
            title && <Text style={{ fontSize:25, fontWeight:'bold', marginLeft: 10 }}>{title}</Text>
            }
                
                <FlatList
                    data={ movies }
                    renderItem={({ item} :  any) => (
                    <MoviePoster movie={item} width={130} height={160} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal= {true}
                />
            </View>
    )
}
