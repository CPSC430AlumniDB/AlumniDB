import Layout from "../components/MyLayout.js";
import jsCookie from "js-cookie";
import { getLoggedInfo } from "../lib/utils";
import Dropdown from 'react-dropdown';
import { Navigation } from '../components/Nav.js';
import Router from "next/router";
import styles from '../styles/Index.module.css'
import axios from 'axios';
import {getAdvancedMajors, getAdvancedYears, getAdvancedOccupation} from "../lib/utils";


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
      majorResults: [],
      yearResults: [],
      major: [],
      gradyear: [],
      occupation: [],
      occupationResults: []
      //dropdownMenu: {}

    };
    this.showOccupationsMenu = this.showOccupationsMenu.bind(this);
    this.showMajorsMenu = this.showMajorsMenu.bind(this);
    this.showYearsMenu = this.showYearsMenu.bind(this);
    //this.closeMenu = this.closeMenu.bind(this);
    this.getAllMajors = this.getAllMajors.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleYearSearch = this.handleYearSearch.bind(this);
    this.handleMajorSearch = this.handleMajorSearch.bind(this);
    this.handleMajorUpdate = this.handleMajorUpdate.bind(this);
    this.handleYearUpdate = this.handleYearUpdate.bind(this);
    this.handleOccupationSearch = this.handleOccupationSearch.bind(this);
    this.handleOccupationUpdate = this.handleOccupationUpdate.bind(this);


    
  }

  showOccupationsMenu(event) {
    event.preventDefault();
    
    this.setState({ showOccupations: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
    this.getOccupations();
  }

  showMajorsMenu(event) {
    event.preventDefault();
    
    this.setState({ showMajors: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
    this.getAllMajors();
  }

  showYearsMenu(event) {
    event.preventDefault();
    
    this.setState({ showYears: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
    this.getYears();
  }


  // closeMenu(event) {
    
  //   if (!this.dropdownMenu.contains(event.target)) {
      
  //     this.setState({ showMenu: false }, () => {
  //       document.removeEventListener('click', this.closeMenu);
  //     });  
      
  //   }
  // }

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

    // getMajorsAdvanced(major_info){
    //   axios.get(`http://localhost:8080/getMajorInfo=${this.state.major}`)
    //   .then(res => {
    //     const advancedMajors = res.data;
    //     this.setState({ major: advancedMajors });

    //   })
    // }


    async handleMajorSearch(evt) {
    
      const majorResults = await getAdvancedMajors(this.state.major);
      if(majorResults){
        this.setState({ majorResults: majorResults});
      } else {
        this.setState({ 
          majorResults: []    
        });
      } 
      console.log(majorResults);
  }

  async handleOccupationSearch(evt) {
    
    const occupationResults = await getAdvancedOccupation(this.state.occupation);
    if(occupationResults){
      this.setState({ occupationResults: occupationResults});
    } else {
      this.setState({ 
        occupationResults: []    
      });
    } 
    console.log(occupationResults);
}

  async handleYearSearch(evt) {
    
    const yearResults = await getAdvancedYears(this.state.gradyear);
    if(yearResults){
      this.setState({ yearResults: yearResults});
    } else {
      this.setState({ 
        yearResults: []    
      });
    } 
    console.log(yearResults);
}

    handleMajorUpdate(evt) {
      this.setState({ major: evt.target.value}, this.handleMajorSearch);    
    }

    handleOccupationUpdate(evt) {
      this.setState({ occupation: evt.target.value}, this.handleOccupationSearch);    
    }

    handleYearUpdate(evt) {
      this.setState({ gradyear: evt.target.value}, this.handleYearSearch);    
    }

    handleInput(evt){
      this.handleUpdate(evt);
      this.handleSearch(evt);
  
    }

    




    /* JP's notes for backend functions
  Getting dropdown box fields:
    listYears()
    listOccupations()
    listMajors()

  advanced search query
  advancedSearch() (in utils I put it as advSearch() so that it doesnt conflict with the class name of this page)
    Takes three body parameters
    -occupation (string) : if query is blank, put "-"
    -major (string) : if query is blank, put "-"
    -year (signed int) : if query is blank, put 0
    example: User selects in "environmental science" from dropdown, and leaves the other fields blank
      the body of the request would be:
       occupation: "-"
       year: 0
       major: "environmental science"

    the backend function will do a query for just the actual

    Make sure default state is 
      occupation: "-"
       year: 0
       major: "-"
    this will ensure that when you first click advanced search, you see all the alumni, and then narrow it down

  */
 

  render() {
    const that = this;
    //if(jsCookie.get("username") == null){ return Index();}
    return (
      <>
        {/* <head>
          <title>ESAMS | Advanced Search</title>
        </head> */}
        <div className={styles.container}>
        <Navigation/>
          <Layout>
            <h2>Browse Alumni by Fields</h2>
    		<div>
        <button onClick={this.showYearsMenu}>Search Graduation Year</button>
              {
                this.state.showYears
                ? (
                  <div
                  className="menu"
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
              
            </div>

            {this.state.years.length > 0 ? (
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
                <tbody>{this.state.yearResults.map(function(item, key) {
                       
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

            <div>



        <button onClick={this.showOccupationsMenu}>Search Occupations</button>
              {
                this.state.showOccupations
                ? (
                  <div
                  className="menu"
                  ref={(element) =>{
                    this.dropdownMenu = element;
                  }}
                  >
                    {this.state.occupations.length > 0 ? (
                    <div id="entries">
                    <div>{this.state.occupations.map((item, key) => {  
                     
                       return (
                         //need to pass this.state.major as a value of the button that is clicked
                          <li key = {key}>
                                    
                                <button value={item.occupation} onClick={(e) => {
                            e.stopPropagation(); 
                            this.handleOccupationUpdate(e);
                            }}>{item.occupation}</button>                           
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

            {this.state.occupations.length > 0 ? (
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
                <tbody>{this.state.occupationResults.map(function(item, key) {
                       
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

            <div>
          
        
              <button onClick={this.showMajorsMenu}>Search Majors</button>
              {
                this.state.showMajors
                ? (
                  <div
                  className="menu"
                  ref={(element) =>{
                    this.dropdownMenu = element;
                  }}
                  >
                    {this.state.majors.length > 0 ? (
                    <div className={this.showMajorMenu ? "showMajorMenu" : "hideMajorMenu"} id="entries">
                    <div>{this.state.majors.map((item, key) => {  
                     
                       return (
                         //need to pass this.state.major as a value of the button that is clicked
                          <li key = {key}>
                                    
                                <button value={item.major} onClick={(e) => {
                            e.stopPropagation(); 
                            this.handleMajorUpdate(e);
                            }}>{item.major}</button>                           
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

            {this.state.majors.length > 0 ? (
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
                <tbody>{this.state.majorResults.map(function(item, key) {
                       
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

            <div> 
            </div>
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
  }
}

export default advancedSearch;


/*
*/ 