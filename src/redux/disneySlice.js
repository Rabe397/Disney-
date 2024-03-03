import {createSlice} from '@reduxjs/toolkit';

const initialState ={ 
    userInfo : null,
    movies : [],
}

const disneySlice = createSlice({
    name : "disney",
    initialState,
    reducers : {
       setMovies: (state,action)=>{
        state.movies = action.payload;
       },
       setUser: (state,action)=>{
        state.userInfo = action.payload;
       },
       setSignOut: (state)=>{
        state.userInfo = null;
       } 
    }

})

export const {setMovies , setUser , setSignOut} = disneySlice.actions;
export const selectMovies = (state) => state.disney.movies;
export const userInfo = (state) => state.disney.userInfo
export default disneySlice.reducer;