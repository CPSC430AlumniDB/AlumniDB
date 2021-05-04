import Layout from "../components/MyLayout.js";
import Link from 'next/link';
import React from "react";
import styles from '../styles/Index.module.css'
import {getFeatured} from '../lib/utils.js';
import { Navigation } from '../components/Nav.js';
import Router from "next/router";
import axios from 'axios';
import jsCookie from "js-cookie"

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
                  <p>The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share</p>
                  <p>-Lady Bird Johnson</p>
                  <br/>
                </section>
                <section className={styles.alumni}>
                  <h1>Alumni of the Month</h1>
                </section>
                  {this.state.featured.length > 0 ? (
                <div className={styles.monthly}>
                <table className={styles.entries}>
                <tbody>{this.state.featured.map(function(item, key) {
                      
                        return (
                          
                          
                            <tr key = {key}>
                                <div className={styles.idk}>
                                  <td className={styles.Fname}>{item.firstname}</td>
                                  <td className={styles.Lname}>{item.lastname}</td>
                                </div>
                                <td className={styles.major}>{item.major}</td>
                                <td className={styles.job}>{item.occupation}</td>
                                <td className={styles.update}>{item.personalupdates}</td>



                            </tr>
                          )
                      
                      })}</tbody>
                </table>
                </div>
              ) : null}

              


              </Layout>
              </div>
            </>
        );
    } else {return null;}
  }
}

export default Index;
