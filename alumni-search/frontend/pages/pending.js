import jsCookie from "js-cookie"
import Layout from "../components/MyLayout.js";
import styles from '../styles/search.module.css';
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
            <section className={styles.heading}>
              <h1>Submission's Awaiting Approval</h1>
            </section>
            <br></br>
            <br></br>
            <section className={styles.alumni}>
              {this.state.pendingAlumni.length > 0 ? (
                <div className={styles.table}>
                <table className={styles.entries}>
                <tr>
                  <th className={styles.thing}>First Name</th>
                  <th className={styles.thing}>Middle Name</th>
                  <th className={styles.thing}>Last Name</th>
                  <th className={styles.thing}>Graduation Year</th>
                  <th className={styles.thing}>Major</th>
                  <th className={styles.thing}>Occupation</th>
                  <th className={styles.thing}>Email</th>
                  <th className={styles.thing}>Email Updates</th>
                  <th className={styles.thing}>Personal Updates</th>
                </tr>
              <tbody>{this.state.pendingAlumni.map(function(item, key) {
                  
                return (
                  
                
                  <tr key = {key}>
                  
                    <td className={styles.thing}>{item.firstname}</td>
                                <td className={styles.thing}>{item.middlename}</td>
                                <td className={styles.thing}>{item.lastname}</td>
                                <td className={styles.thing}>{item.gradyear}</td>
                                <td className={styles.thing}>{item.major}</td>
                                <td className={styles.thing}>{item.occupation}</td>
                                <td className={styles.thing}>{item.email}</td>
                                <td className={styles.thing}>{item.emailupdates}</td>
                    <td className={styles.thing}>{item.personalupdates}</td>
                    <br></br>
                    <div className={styles.button} onClick={() => that.handleApprove(item)}>Approve</div>
                    <br></br><div className={styles.button} onClick={() => that.handleReject(item)}>Reject</div>
                    
                    




                  </tr>
                )
                
                })}</tbody>
            </table>
            </div>
            ) : null}
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
    } else {return null}
  }
}

export default pending;
