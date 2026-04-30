"use client";

import styles from "@/components/ui/initial-loader.module.css";

export function InitialLoader() {
  return (
    <div className={styles.initialLoader} aria-hidden="true">
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.box}>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.box}>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.box}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
