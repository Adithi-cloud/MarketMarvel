
import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/mongoDB";
import Stock from "../../../models/StockModel";

export async function POST(request) {
  const  {code, rate, volume,cap} = await request.json();
  await connectToDatabase();
  await Stock.create( {code, rate, volume,cap});
  return NextResponse.json({message: "success"},{status: 201});
}

export async function GET() {
    await connectToDatabase();
    const stocks = await Stock.find();
    return NextResponse.json({stocks})
}
