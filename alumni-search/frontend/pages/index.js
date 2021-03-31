import Layout from "../components/MyLayout.js";
import Link from 'next/link'
import Nav from '../components/Nav.js'
import Head from 'next/head'
import styles from '../styles/Index.module.css'


const indexLink = {
  display: "inline",
  textAlign: "center",
  fontSize: "1em",
  textColor: "#000000"

}


export default function Index() {
  return (
    <>
      <head>
        <title>ESAMS | Dashboard</title>
      </head>
      <div className={styles.container}>
        <Layout>
          <section className={styles.showcase}>
            <h1>Environmental Science Alumni Management System</h1>
            <p>Maybe put a discription or a quote the esci department uses</p>
          </section>
          <section className={styles.alumni}>
            <h1>Alumni of the Month</h1>
            <h3>Jane Doe</h3>
            <p>Major</p>
            <p>Grad year</p>
            <p>Description</p>
          </section>
          <section className={styles.boxes}>
            <article className={styles.box}>
              <h3>Place holder</h3>
              <p>place holder</p>
            </article> 
            <article className={styles.box}>
              <h3>Place holder</h3>
              <p>place holder</p>
            </article> 
          </section>
        </Layout>
      </div>
    </>
  );
}
