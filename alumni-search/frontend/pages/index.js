import Layout from "../components/MyLayout.js";
import Link from 'next/link';
import React from "react";
import styles from '../styles/Index.module.css'
import {getFeatured} from '../lib/utils.js';
import { Header } from '../components/Header.js';
import Router from "next/router";
import axios from 'axios';

//this page is working as expected, need to add buttoms for approval/rejection and handle that accordingly
const indexLink = {
  display: "inline",
  textAlign: "center",
  fontSize: "1em",
  textColor: "#000000"

}

class Index extends React.Component{
  constructor(props) {
    super(props);

    this.state = { 
                
      featured: []   
      
    };
  }

    componentDidMount() {
      axios.get(`http://localhost:8080/showFeatured`)
        .then(res => {
          const featured = res.data;
          this.setState({ featured: featured });

        })

    }
  
    render() {

      const {
        featured
     } = this.state;
      return (
        <Layout>
          <Link href="/submitInfo">
          <a>Submit Alumni Information</a>
          </Link>
          <section className={styles.showcase}>
             <h1>Environmental Science Alumni Management System</h1>
             <p>Maybe put a discription or a quote the esci department uses</p>
           </section>
           <section className={styles.alumni}>
             <h1>Alumni of the Month</h1>
             {this.state.featured.length > 0 ? (
          <table id="entries">
          <tbody>{this.state.featured.map(function(item, key) {
                 
                   return (
                     
                    
                      <tr key = {key}>
                        
                          <td>{item.firstname}</td>
                          <td>{item.lastname}</td>
                          <td>{item.major}</td>
                          <td>{item.occupation}</td>
                          <td>{item.personalupdates}</td>



                      </tr>
                    )
                 
                 })}</tbody>
           </table>
        ) : null}
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

          <br /> <br />   
          <br />
          <br />
          <br />
          <br /> <br />
          
          <style jsx>{`
            h1,
            h2,
            h3,
            h4,
            a,
            p {
              color: #1f618d;
              font-family: "Arial";
            }
            .td {
              padding: 0;
            }
  
            .button-style {
              margin: auto auto;
              cursor: pointer;
              background-color: #1f618d;
              color: #ffffff;
              width: 150px;
              height: 45px;
              font-family: "Arial";
              line-height: 1.9;
              font-size: 1.4rem;
            }
  
            .text-style {
              font-size: 1.4rem;
              line-height: 1.6rem;
              font-family: "Arial";
              width: 50px;
              align: right;
            }
  
            .error-style {
              font-size: 1.4rem;
              line-height: 1.6rem;
              font-family: "Arial";
              color: red;
            }
  
            .input-style {
              font-size: 1.4rem;
              line-height: 1.6rem;
            }
  
            .description {
              font-family: "Arial";
              font-size: "10px";
            }
  
            ul {
              padding: 0;
            }
  
            li {
              list-style: none;
              margin: 5px 0;
            }
  
            a {
              text-decoration: none;
              color: blue;
            }
  
            input {
              margin: auto auto;
              width: 200px;
            }
  
            .description {
              font-family: "Arial";
              font-size: "10px";
            }
  
            ul {
              padding: 0;
            }
  
            li {
              list-style: none;
              margin: 5px 0;
            }
  
            a {
              text-decoration: none;
              color: blue;
            }
  
            a:hover {
              opacity: 0.6;
            }
            table {  
              color: #333; /* Lighten up font color */
              font-family: Helvetica, Arial, sans-serif; /* Nicer font */
              width: 100%; 
              border-collapse: 
              collapse; 
              border-spacing: 0;
            }
          `}</style>
        </Layout>
      );
  }
}

export default Index;
