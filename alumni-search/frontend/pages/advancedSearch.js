import Layout from "../components/MyLayout.js";
import jsCookie from "js-cookie";
import { getLoggedInfo } from "../lib/utils";
import Dropdown from 'react-dropdown';
import { Navigation } from '../components/Nav.js';
import Router from "next/router";
import styles from '../styles/Index.module.css'
import {listMajors,lisOccupations,listYears,advSearch} from '../lib/utils.js';

// export default function List(){
// 	if(jsCookie.get("username") == null){return Index();}
// 	return "placeholder for browsing by fields"
// }
//gradyear, major, occupation
class advancedSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      
      majors: [],
      years: [],
      occupations: []

    };
    
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
        <head>
          <title>ESAMS | Advanced Search</title>
        </head>
        <div className={styles.container}>
        <Navigation/>
          <Layout>
            <h2>Browse Alumni by Fields</h2>
    		<Dropdown>
    			<Dropdown.Toggle variant="success" id="dropdown-basic">
    			Dropdown Button
    		</Dropdown.Toggle>

    		<Dropdown.Menu>
    			<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    			<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    			<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    		</Dropdown.Menu>
    		</Dropdown>
            
            <br />
            <br />
            
            <br /> <br />
          
            {/* {this.state.results.length > 0 && this.state.search !== '' ? (
              <table id="entries">
                <tr>
                  
                  <th>Graduation Year</th>
                  <th>Major</th>
                  <th>Occupation</th>
                  
                </tr>
              <tbody>{this.state.results.map(function(item, key) {
                     
                       return (
                         
                        
                          <tr key = {key}>
                            
                              <td>{item.gradyear}</td>
                              <td>{item.major}</td>
                              <td>{item.occupation}</td>

                          </tr>
                        )
                     
                     })}</tbody>
               </table>
            ) : null} */}
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


