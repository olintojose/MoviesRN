
import  { useEffect, useState } from 'react'
import movieDb from '../api/movieDB';
import { MovieDbMoviesResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}


export const useMovies = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })
    

    const getMovies = async () => {

       const nowPlayingPromise  =  movieDb.get<MovieDbMoviesResponse>('/now_playing')
       const popularPromise     =  movieDb.get<MovieDbMoviesResponse>('/popular')
       const topRatedPromise    =  movieDb.get<MovieDbMoviesResponse>('/top_rated')
       const upcomingPromise    =  movieDb.get<MovieDbMoviesResponse>('/upcoming')
       
      const resps = await Promise.all([
          nowPlayingPromise,
          popularPromise,
          topRatedPromise,
          upcomingPromise,
      ])

      setMoviesState({
        nowPlaying:     resps[0].data.results,
        popular:        resps[1].data.results,
        topRated:       resps[2].data.results,
        upcoming:       resps[3].data.results,
      })


      setIsLoading( false )
     
       
    }

    useEffect(() => {
        //now_playing
        getMovies();
    
    }, [])
    return {
        
        ...moviesState,
        isLoading
        
    }
}
