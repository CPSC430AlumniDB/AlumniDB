import Layout from "../components/MyLayout.js";
import jsCookie from "js-cookie";
import { getLoggedInfo } from "../lib/utils";
import { Navigation } from '../components/Nav.js';
import Router from "next/router";
import styles from '../styles/search.module.css'

//This page needs to be styled but is otherwise done
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      search: '',
      results: []
    };
    
  }

  handleUpdate(evt) {
    this.setState({ search: evt.target.value }, this.handleSearch);    
  }

  async handleSearch() {
    
      const results = await getLoggedInfo(this.state.search,jsCookie.get("username"));
      if(results){
        this.setState({ results: results });
      } else {
        this.setState({ 
          results: []    
        });
      } 
      console.log(results);
  }

   handleInput(evt){
    this.handleUpdate(evt);
    this.handleSearch(evt);

  }

 

  render() {
    const that = this;
    //if(jsCookie.get("username") == null){ return Index();}
    return (
      <>
        <head>
          <title>ESAMS | Search</title>
        </head>
        <Navigation/>
        <Layout>
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>Enter In a Keyword to Start Searching Alumni</h2>
            </div>
            <div className={styles.box}>
              <input
                type="text"
                className="text-style"
                value={this.state.search}
                onChange={this.handleInput.bind(that)}
              />
            </div>
            <br />
            <br />
            
            <br /> <br />
            
              {this.state.results.length > 0 && this.state.search !== '' ? (
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
                  </tr>
                <tbody>{this.state.results.map(function(item, key) {
                       
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



                            </tr>
                          )
                       
                       })}</tbody>
                 </table>
                </div>
            ) : null}
          </div>
        </Layout>
      </>
    );
  }
}

export default Home;
