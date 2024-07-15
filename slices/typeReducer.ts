
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const postData = {
    codes: ["ETH", "BNB", "BTC", "GRIN","USDT"],
    currency: "USD",
    sort: "rank",
    order: "ascending",
    offset: 0,
    limit: 0,
    meta: false,
  }

export const fetchDatatoDB = createAsyncThunk('data/getAllData', async (thunkApi) =>{
    const response = await axios.post(
        'https://api.livecoinwatch.com/coins/map',
        postData,
        {
          headers: {
            'Content-Type': 'application/json',
            "x-api-key": "c4ae2bf3-efe3-4106-8966-526aad58fa0d",
          },
        }
      );
    const newData = await response.data;
    return newData;
})

const initialState = {
    stockData: []
} as any;
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchDatatoDB.fulfilled, (state,action) =>{
            state.stockData.push(...action.payload)
            storeDatainMongoDb(state.stockData);
        })
    }
});

async function storeDatainMongoDb(stocksData: any[]) {

    try {
        const response = await axios.post(
            'http://localhost:3000/api/stocks'
          , stocksData);
          return response.data;
    } catch (error) {
        console.error('Error fetching or storing data:', error);
    }
  }

export default dataSlice.reducer