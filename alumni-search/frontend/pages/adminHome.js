import Layout from "../components/MyLayout.js";
import Link from 'next/link'
import React from "react";
import styles from '../styles/Index.module.css'
import {getFeatured} from '../lib/utils.js';
import { Navigation } from '../components/Nav.js';
import Router from "next/router";

const indexLink = {
  display: "inline",
  textAlign: "center",
  fontSize: "1em",
  textColor: "#000000"

}

class Index extends React.Component{
  constructor(props) {
    super(props);

    this.state = { firstname: "", lastname: "", occupation: "",
                personalupdates: "", gradyear: ''};


    }
//state is not being set on the frontend
      async handleFirstNameUpdate(evt){
      this.setState({firstname: evt.target.value});
      }
      async handleLastNameUpdate(evt){
      this.setState({lastname: evt.target.value});
      }
      async handleOccupationUpdate(evt){
      this.setState({occupation: evt.target.value});
      }
      async handlePersonalUpdatesUpdate(evt){
      this.setState({personalupdates: evt.target.value});
      }
      async handleGradYearUpdate(evt){
      this.setState({gradyear: evt.target.value});
      }


      async handleSearch(evt){
    
        const results = await getFeatured({
            firstname: this.state.firstname, 
            lastname: this.state.lastname,
            gradyear: this.state.gradyear, 
            occupation: this.state.occupation, 
            personalupdates: this.state.personalupdates, 
            
        });
        console.log(results);
        if(results){
            this.setState({ results: results });
            console.log(results + "we here?");

          } else {
            this.setState({ 
              results: []    
            });
            console.log(results + "????????????");

          } 
    }
     
  
    render() {

      const that = this;
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

              
              <div htmlFor="firstname" className="text-style" value={this.state.firstname} onLoad={() =>this.handleFirstNameUpdate.bind(this)}>
              </div>
              <br /> <br />
              
              <div htmlFor="lastname" className="text-style" value={this.state.lastname} onLoad={() =>this.handleLastNameUpdate.bind(this)}>
              </div>
              
              <br /> <br />
              <div htmlFor="occupation" className="text-style" value={this.state.occupation} onLoad={() =>this.handleOccupationUpdate.bind(this)} >
              </div>
              
              <div htmlFor="personalUpdates" className="text-style" value={this.state.personalupdates} onLoad={() =>this.handlePersonalUpdatesUpdate.bind(this)}>
              </div>
              
              <br /> <br />   
              <br />
              <br />
              <br />
              <br /> <br />
            </Layout>
            </div>
        </>
      );
  }
}

export default Index;