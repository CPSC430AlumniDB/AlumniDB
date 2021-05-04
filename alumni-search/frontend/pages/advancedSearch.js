import Layout from "../components/MyLayout.js";
import jsCookie from "js-cookie";
import { getLoggedInfo } from "../lib/utils";
import Dropdown from 'react-dropdown';
import { Navigation } from '../components/Nav.js';
import Router from "next/router";
import styles from '../styles/search.module.css'
import axios from 'axios';
import {saveForEdit,getAdvancedMajors, getAdvancedYears, getAdvancedOccupation, advSearch} from "../lib/utils";


class advancedSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      
      majors: [],
      years: [],
      occupations: [],
      showMenu: false,
      showMajors: false,
      showOccupations: false,
      showYear: false,
      majorSearchTerm: '-', 
      occupationSearchTerm: '-',
      yearSearchTerm: 0,
      searchResults: [],
      dropdownMenu: {}
    };
    this.toggleOccupationsMenu = this.toggleOccupationsMenu.bind(this);
    this.toggleMajorsMenu = this.toggleMajorsMenu.bind(this);
    this.toggleYearsMenu = this.toggleYearsMenu.bind(this);
    this.getAllMajors = this.getAllMajors.bind(this);
    this.handleMajorUpdate = this.handleMajorUpdate.bind(this);
    this.handleYearUpdate = this.handleYearUpdate.bind(this);
    this.handleOccupationUpdate = this.handleOccupationUpdate.bind(this);
  }

  //on load
  componentDidMount() {
    //if not logged in
    if (!jsCookie.get("username") ) {
      Router.replace("/");
    }

    this.handleAdvSearch();
    this.getAllMajors();
    this.getOccupations();
    this.getYears();
    }
  
  async handleEdit(item) {
    console.log(item)
    await saveForEdit({id : item.id})
    Router.replace('/editPage')
  }

  clearSearchTerms() {
    this.setState({
      majorSearchTerm: '-', 
      occupationSearchTerm: '-',
      yearSearchTerm: 0}, this.handleAdvSearch)
  }
  

  toggleOccupationsMenu(event) {
    event.preventDefault();
    
    this.setState({ showOccupations: !this.state.showOccupations });
  }

  toggleMajorsMenu(event) {
    event.preventDefault();
    this.setState({ showMajors: !this.state.showMajors });
  }

  toggleYearsMenu(event) {
    event.preventDefault();
    this.setState({ showYears: !this.state.showYears });
  }

  getAllMajors() {
    axios.get(`http://localhost:8080/listMajors`)
      .then(res => {
        const majors = res.data;
        this.setState({ majors: majors });

      })
    }

    getOccupations(){
      axios.get(`http://localhost:8080/listOccupations`)
      .then(res => {
        const occupations = res.data;
        this.setState({ occupations: occupations });

      })
    }
    
    getYears(){
      axios.get(`http://localhost:8080/listYears`)
      .then(res => {
        const years = res.data;
        this.setState({ years: years });

      })
    }

    async handleAdvSearch(evt) {
      const searchResults = await advSearch(this.state.yearSearchTerm, this.state.majorSearchTerm, this.state.occupationSearchTerm);
      console.log(searchResults)
      if(searchResults){
        this.setState({ searchResults: searchResults});
      } else {
        this.setState({ 
          searchResults: []    
        });
      } 
      
  }

    handleMajorUpdate(evt) {
      this.setState({ majorSearchTerm: evt.target.value}, this.handleAdvSearch);    
    }

    handleOccupationUpdate(evt) {
      this.setState({ occupationSearchTerm: evt.target.value}, this.handleAdvSearch);    
    }

    handleYearUpdate(evt) {
      this.setState({ yearSearchTerm: evt.target.value}, this.handleAdvSearch);    
    }

  render() {
    if (jsCookie.get("username")) {
      const that = this;
      return (
        <>
          {/* <head>
            <title>ESAMS | Advanced Search</title>
          </head> */}
          <div className={styles.container}>
          <Navigation/>
            <Layout>
            <div className={styles.heading}>
              <h2>Browse Alumni by Fields</h2>
            </div>
          <div>
          <button className={styles.button1} onClick={this.toggleYearsMenu}>Filter Graduation Year</button>
                {
                  this.state.showYears
                  ? (
                    <div
                    className={styles.menu}
                    ref={(element) =>{
                      this.dropdownMenu = element;
                    }}
                    >
                      {this.state.years.length > 0 ? (
                      <div id="entries">
                      <div>{this.state.years.map((item, key) => {  
                      
                        return (
                          
                            <li key = {key}>
                                      
                                  <button value={item.gradyear} onClick={(e) => {
                              e.stopPropagation(); 
                              this.handleYearUpdate(e);
                              }}>{item.gradyear}</button>                           
                            </li>
                                  )
                              
                              })}</div>
                      </div>
                ) : null}

                    </div>
                  ) : (
                    null
                  )
                }
    
          <button className={styles.button1} onClick={this.toggleOccupationsMenu}>Filter Occupations</button>
                {
                  this.state.showOccupations
                  ? (
                    <div
                    className={styles.menu}
                    ref={(element) =>{
                      this.dropdownMenu = element;
                    }}
                    >
                      {this.state.occupations.length > 0 ? (
                      <div id="entries">
                      <div>{this.state.occupations.map((item, key) => {  
                      
                        return (
                          
                            <li key = {key}>
                                      
                                  <button value={item.occupation} onClick={(e) => {
                              e.stopPropagation(); 
                              this.handleOccupationUpdate(e);
                              }}>{(item.occupation==="")?"None":item.occupation}</button>                           
                            </li>
                                  )
                              
                              })}</div>
                      </div>
                ) : null}

                    </div>
                  ) : (
                    null
                  )
                }

                <button className={styles.button1} onClick={this.toggleMajorsMenu}>Filter Majors</button>
                {
                  this.state.showMajors
                  ? (
                    <div
                    className={styles.menu}
                    ref={(element) =>{
                      this.dropdownMenu = element;
                    }}
                    >
                      {this.state.majors.length > 0 ? (
                      <div className={this.showMajorMenu ? "showMajorMenu" : "hideMajorMenu"} id="entries">
                      <div>{this.state.majors.map((item, key) => {  
                      
                        return (
                          
                            <li key = {key}>
                                      
                                  <button value={item.major} onClick={(e) => {
                              e.stopPropagation(); 
                              this.handleMajorUpdate(e);
                              }}>{(item.major==="")?"None":item.major}</button>                           
                            </li>
                                  )
                              
                              })}</div>
                      </div>
                ) : null}

                    </div>
                  ) : (
                    null
                  )
                }
              </div>
              <button className={styles.button1} onClick={() => that.clearSearchTerms()}>Clear</button>
              {this.state.searchResults.length > 0 ? (
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
                      <th className={styles.thing}>Edit</th>
                    </tr>
                  <tbody>{this.state.searchResults.map(function(item, key) {
                        
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
                                  <td className={styles.button} onClick={() => that.handleEdit(item)}>Edit</td>


                              </tr>
                            )
                        
                        })}</tbody>
                  </table>
                  </div>
              ) : null}

              
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
export default advancedSearch;
