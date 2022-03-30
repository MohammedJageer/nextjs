import React from "react";
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

import styles from '../styles/Home.module.css'

import User from '../fragment/user'

import  '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Home() { 
  return (
    <div className={styles.container}>
      <Head>
        <title>UXBERT</title>
        <meta name="description" content="UXBERT App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <User></User>     
      <Footer></Footer>
    </div>
  )
}
