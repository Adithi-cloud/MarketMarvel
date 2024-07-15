"use client";
import Table from './table';
import styles from './table.module.css'
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from '../../store/store';
import NavBar from './navbar';
import { fetchStockData } from '../../slices/stockSlices';
import { fetchDatatoDB } from '../../slices/typeReducer';
var coinName = "BTC"

export default function Home() {
   //for fetching 5 records for 5 stocks
  const {stockData} = useSelector((state: RootState) => state.data)
  const dispatched = useDispatch<AppDispatch>()
  useEffect(() => {
    const fetchedData = () => {
      dispatched(fetchDatatoDB());
    };
    fetchedData();
    const interval = setInterval(() => {
      fetchedData();
    }, 5000);
    return () => {clearInterval(interval)}
  },[])


   // for fetching 20 records from  DB
  const {entities} = useSelector((state: RootState) => state.stock)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const fetchData = () => {
        dispatch(fetchStockData());
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => {clearInterval(interval)}
  },[])
  const data = entities;

  return (
    <div>
      <video className={styles.videoplay} loop autoPlay muted><source src="/bg-img.mp4"></source></video>
      <NavBar coinName={coinName} />
      <Table data={data} />
    </div>
  );
};
