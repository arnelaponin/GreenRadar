import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";
import styles from "./layout.module.scss";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Head>
        <title>Green Radar</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />

      <div className={styles.pageWrapper}>
        <div className={styles.row}>{children}</div>
      </div>
    </>
  );
}

export default Layout;
