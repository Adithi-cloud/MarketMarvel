
import axios from 'axios';
import Stock from '../../models/StockModel';
import connectToDatabase from '../lib/mongoDB';

const postData = {
  codes: ["ETH", "BNB", "BTC", "GRIN","USDT"],
  currency: "USD",
  sort: "rank",
  order: "ascending",
  offset: 0,
  limit: 0,
  meta: false,
  }

  export async function getServerSideProps() {
    const db = await connectToDatabase();
    return {
      props: {
      }
    };
  }
  

 async function fetchDataAndStore() {
    try {
        const response = await axios.post(
                    'https://api.livecoinwatch.com/coins/map',
                    postData,
                    { 
                      headers: {
                        'Content-Type': 'application/json',
                        "x-api-key": "c4ae2bf3-efe3-4106-8966-526aad58fa0d", // open API token
                      },
                    }
                  );
        const newData = response.data;
        await connectToDatabase();
        await Stock.create(newData);
    } catch (error) {
        console.error('Error fetching or storing data:', error);
    }
}

export default fetchDataAndStore;