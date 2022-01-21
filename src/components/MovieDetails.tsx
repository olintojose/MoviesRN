import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditInterface';
import { MovieFull } from '../interfaces/movieInterface';
import currencyformatter from 'currency-formatter'
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text> {movieFull.vote_average}  </Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(' ')}
                    </Text>
                </View>
                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }} >Synopsis</Text>
                <Text style={{ fontSize: 18 }}>{movieFull.overview}</Text>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }} >Budget</Text>
                <Text style={{ fontSize: 18 }}>{currencyformatter.format(movieFull.budget, { code: 'USD' })}</Text>
            </View>
            <View style={{ marginTop: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }} >Actors</Text>

                <FlatList 
                    data= {cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem= { ( {item }) => <CastItem actor={item} />}
                    horizontal = { true }
                    showsHorizontalScrollIndicator= { false }
                    style={{ marginTop: 10, height:70 }}
                />

            
            </View>

        </>
    )
}

const styles = StyleSheet.create({})
