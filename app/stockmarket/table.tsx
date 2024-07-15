"use client";
import React from 'react';
import styles from './table.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

interface TableProps {
  data: any[];
}

const TableComponent: React.FC<TableProps> = ({ data }) => {
  return (
    <div>
      <div className={styles.container}>
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope="col" className={styles.column}>Code</th>
            <th scope="col" className={styles.column}>Rate</th>
            <th scope="col" className={styles.column}>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={styles.column}>{item.code}</td>
              <td className={styles.column}>{item.rate}</td>
              <td className={styles.column}>{item.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TableComponent;
