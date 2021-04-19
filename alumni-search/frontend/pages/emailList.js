import jsCookie from "js-cookie"
import Layout from "../components/MyLayout.js";
import styles from '../styles/Index.module.css';
import axios from 'axios';


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


class EmailList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 

      emails: []

    };
    
  }

  componentDidMount() {
	axios.get(`http://localhost:8080/getEmailList`)
	  .then(res => {
		const emails = res.data;
		this.setState({ emails: emails });

	  })

  }

  

 

  render() {
    //if(jsCookie.get("username") == null){ return Index();}
    
		return (
		<Layout>
			
			<section className={styles.showcase}>
				<h1>Alumni Email List</h1>
			</section>
			<br></br>
			<br></br>
			<section className={styles.alumni}>
				{this.state.emails.length > 0 ? (
			<table id="entries">
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email</th>
				</tr>
			<tbody>{this.state.emails.map(function(item, key) {
					
					return (
						
					
						<tr key = {key}>
						
						  <td>{item.firstname}</td>
                          <td>{item.lastname}</td>
                          <td>{item.email}</td>
						  
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
    );
  }
}

export default EmailList;