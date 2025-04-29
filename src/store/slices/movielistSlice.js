import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const fetchMovieList = createAsyncThunk(
    'movieList/fetchMovieList',
    async (_, {rejectWithValue}) => {

        try {
            const response = await fetch('https://yts.mx/api/v2/list_movies.json',
                {
                    method: 'GET',
                    headers: {
                       
                    },
                }
            )
            .then(response => response.json()) 

            const data = await response.data.movies;
            return data;
            
        }
        catch(error) {
            console.error('Error fetching Movie Lists:', error);
            return rejectWithValue(error.message);
        }
    }
)

export const checkMovieUpdates = createAsyncThunk(
    'movieList/checkMovieUpdates',
    async(_, {getState, rejectWithValue}) => {
        try {
            const response = await fetch('https://yts.mx/api/v2/list_movies.json',
                {
                    method: 'GET',
                    headers: {
                       
                    },
                }
            )
            .then(response => response.json()) 

            const data = await response.data.movies;
            const { movies } = getState();
            const oldMovies = movies.moviesList;
            const isDifferent = JSON.stringify(oldMovies) !== JSON.stringify(data);

            return isDifferent;
            
        }
        catch(error) {
            console.error('Error checking updates:', error);
            return rejectWithValue(error.message);
        }
    }
)

export const fetchTopRatingMovie = createAsyncThunk(
    'movieList/topRatingMovie',
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://yts.mx/api/v2/list_movies.json',
                {
                    method: 'GET',
                    headers: {
                        
                    },
                }
            )
            .then(response => response.json()) 

            const data = await response.data.movies;
           
            const filteredData = data.filter(movie => movie.rating > 8);
            const sortedData = filteredData?.sort((a, b) => b.rating - a.rating);
           
            const topRating = sortedData?.[0];
            return topRating;
        }
        catch(error) {
            console.error('Error fetching top rated movie:', error);
            return rejectWithValue(error.message);
        }
    }
)


const movieListSlice = createSlice(
    {
        name: 'movieList',
        initialState: {
            moviesList: [],
            topRating: {},
            loading: false,
            error: null,
            refreshing: false
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
            // Fetch Movies
            .addCase(fetchMovieList.pending, (state) => {
                state.loading = true; 
                state.error = null;
            })
            .addCase(fetchMovieList.fulfilled, (state, action) => {
                state.loading = false;
                state.moviesList = action.payload; 
                state.error = null;
            })
            .addCase(fetchMovieList.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.payload;
            })

            // check movie update
            .addCase(checkMovieUpdates.fulfilled, (state, action) => {
                state.refreshing = action.payload;
            })
            .addCase(checkMovieUpdates.rejected, (state, action) => {
                state.refreshing = false;
            })

            // Fetch top rating movie
            .addCase(fetchTopRatingMovie.pending, (state) => {
                state.error = null;
            })
            .addCase(fetchTopRatingMovie.fulfilled, (state, action) => {
                state.topRating = action.payload; 
                state.error = null;
            })
            .addCase(fetchTopRatingMovie.rejected, (state, action) => {
                state.error = action.payload;
            })
        }
    }
);

export default movieListSlice.reducer;