
import Link from "next/link";
import styles from "./page.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

export default function Home() {
  return (
    <main>
      <div className={styles.component}>
        <span className={styles.heading}>Market Marvel</span>
        <span className={styles.intro} itemProp="name">
          Explore, analyze, and thrive in the dynamic world of investments.
          <button className={styles.buttonstyle}>
            <Link href="/stockmarket" className={styles.anchortag}>Get Started</Link>
          </button>
        </span>
      </div>

    </main>
  );
}

