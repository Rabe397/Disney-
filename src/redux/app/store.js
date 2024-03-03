import {configureStore} from '@reduxjs/toolkit';
import disneyReducer from '../disneySlice';

export const store = configureStore({
    reducer:{
       disney : disneyReducer
    }
})