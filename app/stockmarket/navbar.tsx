"use client";
import React, { useState } from "react";
import Chips from "./stockNames";
import styles from "./table.module.css"

export interface coinType {
    coinName: string;
}

export interface Option {
    value: string | number;
    label: string;
  }
const options: Option[] = [
    { value: 'BTC', label: 'Bitcoin' },
    { value: 'ETH', label: 'Ethereum' },
    { value: 'LTC', label: 'Litecoin' },
    { value: 'GRIN', label: 'Grin' },
    { value: 'USDT', label: 'Tether' },
  ];

export default function NavBar({coinName} : coinType) {
    const [selectedOption, setSelectedOption] = useState<string | number>('btc');
    const handleChipClick = (label: string) => {
      setSelectedOption(label);
    };
    return (
        <div className={styles.navbar}>
            {options.map((item, index) => (
              <Chips label={item.label} color="primary" key={index} onClick={handleChipClick} />
            ))}
          
        </div>
    )
}