import { createSlice, createAsyncThunk, PayloadAction, AsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';


export const fetchTable = createAsyncThunk(
    'main/fetchTable',
    async () => {
        const response = await axios.get('http://localhost:8080/api/table/', {
            headers: {
                "Content-type": "application/json"
            },
        });
        return response.data;
    }
);

const initialState = {
    table: [],
    loading: false,
    error: '',
    value: null,
    column: null,
    condition: null

}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setFilterData: (state, action) => {
            state.value = action.payload.value;
            state.column = action.payload.column;
            state.condition = action.payload.condition;
        },
        resetFilterData: (state) => {
            state.value = null;
            state.column = null;
            state.condition = null
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTable.pending, (state) => {
                state.loading = true;
                state.table = [];
                state.error = null;
            })
            .addCase(fetchTable.fulfilled, (state, action) => {
                state.loading = false
                state.table = action.payload;
            })
            .addCase(fetchTable.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
})


export const { setFilterData, resetFilterData } = mainSlice.actions

export default mainSlice.reducer