import Layout from "../components/MyLayout.js";
import jsCookie from "js-cookie";
import { getLoggedInfo } from "../lib/utils";
import Dropdown from 'react-dropdown';

// export default function List(){
// 	if(jsCookie.get("username") == null){return Index();}
// 	return "placeholder for browsing by fields"
// }
//gradyear, major, occupation
//This page needs to be styled but is otherwise done
class list extends React.Component {
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
    );
  }
}

export default list;


