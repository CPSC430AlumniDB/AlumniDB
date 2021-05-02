import jsCookie from "js-cookie"
import Layout from "../components/MyLayout.js";
import emailstyles from '../styles/email.module.css';
import axios from 'axios';
import { Navigation } from '../components/Nav.js';
import Router from "next/router";

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
     //if not logged in
     if (!jsCookie.get("username") ) {
      Router.replace("/");
    }
	  axios.get(`http://localhost:8080/getEmailList`)
	  .then(res => {
		const emails = res.data;
		this.setState({ emails: emails });

	  })

  }

  

 

  render() {
    //if(jsCookie.get("username") == null){ return Index();}
    
		return (
    <>
      <head>
        <title>ESAMS | Email</title>
      </head>

      <Navigation/>
		  
      <Layout>
        <div className={emailstyles.containers}>
            <div className={emailstyles.headings}>
              <h2>Alumni Email List</h2>
            </div>

    			<br></br>
    			<br></br>
    			{this.state.emails.length > 0 ? (
          <table className={emailstyles.entry}>
    				<tr>
    					<th className={emailstyles.things}>First Name</th>
    					<th className={emailstyles.things}>Last Name</th>
    					<th className={emailstyles.things}>Email</th>
    				</tr>
            <tbody>{this.state.emails.map(function(item, key) {
    					
    					return (
    						
    					
    						<tr key = {key}>			
    						  <td className={emailstyles.things}>{item.firstname}</td>
                  <td className={emailstyles.things}>{item.lastname}</td>
                  <td className={emailstyles.things}>{item.email}</td>					  
    						</tr>
    					)
    					
    					})}</tbody>
    			</table>
    			) : null}
        </div>
      </Layout>
    </>
    );
  }
}

export default EmailList;