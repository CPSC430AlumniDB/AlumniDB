import jsCookie from "js-cookie"
import Layout from "../components/MyLayout.js";
import styles from '../styles/Index.module.css';
import axios from 'axios';
import { Navigation } from '../components/Nav.js';
import Router from "next/router";
import {approve} from '../lib/utils.js';
import {reject} from '../lib/utils.js';

const indexLink = {
  display: "inline",
  textAlign: "center",
  fontSize: "1em",
  textColor: "#000000"

}
// export default function Pending(){
// 	if(jsCookie.get("username") == null){return Index();}
// 	return "Placeholder for Pending Page";
// }


class pending extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 

      pendingAlumni: []

    };
    
  }

  getPendingList() {
    axios.get(`http://localhost:8080/getPending`)
	  .then(res => {
		const pendingAlumni = res.data;
		this.setState({ pendingAlumni: pendingAlumni });
	  }) 
    /*
    for (let alum in this.state.pendingAlumni) {
      axios.get(`http://localhost:8080/findMatch`)
	    .then(res => {
		  alum.match = res.data[0]
      console.log(res.data[0])
	  }) */

  }

  componentDidMount() {
     //if not logged in
     if (!jsCookie.get("username") ) {
      Router.replace("/");
    }
	  this.getPendingList(); //fill list

  }

  //Handle accept
  /* This is connected to each button for each pending alumni
  When clicked, it sends a request to approve alumni with this ID
  */
  async handleApprove(item){
    console.log("id = " + item.id)
    //make sure its an integer
    
    let response = await approve({
      id: item.id //pass in id
    });
    //location.reload(); //refresh
    this.getPendingList(); //refresh
  }

    //Handle accept
  /* This is connected to each button for each pending alumni
  When clicked, it sends a request to approve alumni with this ID
  */
  async handleReject(item){
    console.log("id = " + item.id)
    //make sure its an integer
    
    let response = await reject({
      id: item.id //pass in id
    });
    this.getPendingList(); //refresh
  }
  

 

  render() {
    if (jsCookie.get("username")) {
      const that = this;
      return (
        <>
          <head>
            <title>ESAMS | Pending</title>
          </head>
          <div className={styles.container}>
          <Navigation/>
          <Layout>
            <section className={styles.showcase}>
              <h1>Submission's Awaiting Approval</h1>
            </section>
            <br></br>
            <br></br>
            <section className={styles.alumni}>
              {this.state.pendingAlumni.length > 0 ? (
            <table id="entries">
              <tr>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Graduation Year</th>
                <th>Major</th>
                <th>Occupation</th>
                <th>Email</th>
                <th>Email Updates</th>
                <th>Personal Updates</th>
              </tr>
            <tbody>{this.state.pendingAlumni.map(function(item, key) {
                
                return (
                  
                
                  <tr key = {key}>
                  
                    <td>{item.firstname}</td>
                                <td>{item.middlename}</td>
                                <td>{item.lastname}</td>
                                <td>{item.gradyear}</td>
                                <td>{item.major}</td>
                                <td>{item.occupation}</td>
                                <td>{item.email}</td>
                                <td>{item.emailupdates}</td>
                    <td>{item.personalupdates}</td>
                    <br></br>
                    <div className="button-style" onClick={() => that.handleApprove(item)}>Approve</div>
                    <br></br><div className="button-style" onClick={() => that.handleReject(item)}>Reject</div>
                    
                    




                  </tr>
                )
                
                })}</tbody>
            </table>
            ) : null}
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
                td,
                p {
                  color: #1f618d;          
                  font-family: "Arial";
                }

                .button-style {
                  margin: auto auto;
                  cursor: pointer;
                  background-color: #228b22;
                  color: #ffffff;
                  width: 100px;
                  font-family: "Arial";
            padding-top: -2;
                }

                .text-style {
                  margin: auto auto;
                  width: 200px;
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
              
                td, th { border: 1px solid #CCC; height: 30px; } /* Make cells a bit taller */
              
                th {  
                  background: #F3F3F3; /* Light grey background */
                  font-weight: bold; /* Make sure they're bold */
                }
              
                td {  
                  background: #FAFAFA; /* Lighter grey background */
                  text-align: center; /* Center our text */
                }
              `}</style>
          </Layout>
        </div>
      </>
      );
    } else {return null}
  }
}

export default pending;
