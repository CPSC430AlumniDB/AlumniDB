import Layout from "../components/MyLayout.js";
import Link from 'next/link';
import React from "react";
import styles from '../styles/Index.module.css'
import {getFeatured} from '../lib/utils.js';
import { Navigation } from '../components/Nav.js';
import Router from "next/router";
import axios from 'axios';
import jsCookie from "js-cookie"


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
      if (!jsCookie.get("username") ) {
        Router.replace("/");
      }
      axios.get(`http://localhost:8080/showFeatured`)
        .then(res => {
          const featured = res.data;
          this.setState({ featured: featured });

        })

    }
  
    render() {
      if (jsCookie.get("username")) {
        const {
          featured
      } = this.state;
        return (
          <>
            <head>
              <title>ESAMS | Dashboard</title>
            </head>
            <div className={styles.container}>
              <Navigation/>
              <Layout>
                <section className={styles.showcase}>
                  <h1>Environmental Science Alumni Management System</h1>
                  <p>Maybe put a description or a quote the esci department uses</p>
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
              </Layout>
              </div>
            </>
        );
    } else {return null;}
  }
}

export default Index;
