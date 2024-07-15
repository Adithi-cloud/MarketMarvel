import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchStockData = createAsyncThunk('stocks/getAllData', async () =>{
    const response = await axios.get(
        'http://localhost:3000/api/stocks'
      );
    const data = await response.data;
    return data ? data.stocks : [];
})

const initialState = {
    entities: []
} as any;

const stockSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers:{},
    extraReducers: (builder:any) =>{
        builder.addCase(fetchStockData.fulfilled, (state: any,action: any) =>{
            state.entities.push(...action.payload)
        })
    }
});

export default stockSlice.reducer