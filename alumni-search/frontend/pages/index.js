import Layout from "../components/MyLayout.js";
import Link from 'next/link'
import React from "react";
import styles from '../styles/Index.module.css'
import {getFeatured} from '../lib/utils.js';


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
          `}</style>
        </Layout>
      );
  }
}

export default Index;

// export default function Index() {
//   return (
//     <>
//       <div className={styles.container}>
//         <Layout>
//         <Link href="/submitInfo">
//         <a>Submit Alumni Information</a>
//         </Link>
//           <section className={styles.showcase}>
//             <h1>Environmental Science Alumni Management System</h1>
//             <p>Maybe put a discription or a quote the esci department uses</p>
//           </section>
//           <section className={styles.alumni}>
//             <h1>Alumni of the Month</h1>
//             <h3>Jane Doe</h3>
//             <p>Major</p>
//             <p>Grad year</p>
//             <p>Description</p>
//           </section>
//           <section className={styles.boxes}>
//             <article className={styles.box}>
//               <h3>Place holder</h3>
//               <p>place holder</p>
//             </article> 
//             <article className={styles.box}>
//               <h3>Place holder</h3>
//               <p>place holder</p>
//             </article> 
//           </section>
//         </Layout>
//       </div>
//     </>
//   );

