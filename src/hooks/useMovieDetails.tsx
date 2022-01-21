import movieDB from "../api/movieDB"
import { useState, useEffect } from 'react';
import { MovieFull } from "../interfaces/movieInterface";
import { Cast, CreditResponse } from "../interfaces/creditInterface";

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;   // ? es opcional
    cast: Cast[];
}

export const useMovieDetails = ( movieId: number ) => {

  const [state, setState ] = useState<MovieDetails>({
    isLoading: true, 
    movieFull: undefined,
    cast: []
  });

  const getMovieDetails = async () => {
  
     const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`)
     const castPromise = await movieDB.get<CreditResponse>(`/${movieId}/credits`)

     const [ movieDetailsResp, castPromiseResp ] = await Promise.all([movieDetailsPromise, castPromise]);

     setState({ 
       isLoading: false,
       movieFull: movieDetailsResp.data,
       cast: castPromiseResp.data.cast

     })
    
  }

  useEffect(() => {
    
    getMovieDetails();
  }, [])
  
return {
  ...state
}
}

