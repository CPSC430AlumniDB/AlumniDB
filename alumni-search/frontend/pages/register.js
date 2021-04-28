import Layout from "../components/MyLayout.js";
import Router from "next/router";
import jsCookie from "js-cookie";
import {createAccount} from '../lib/utils.js';
import { Navigation } from '../components/Nav.js';
import styles from '../styles/login.module.css'

//this page is done
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", 
    password: "",
    errors: {
      username: "",
      password: ""
    }
  };
  }

  async handleUsernameUpdate(evt){
    this.setState({username: evt.target.value});
}
  async handlePasswordUpdate(evt){
    this.setState({password: evt.target.value});
}


async handleSearch(evt){
  let loggedInUser = await createAccount({
    username: this.state.username,
    password: this.state.password,
  });
  console.log(loggedInUser);
  this.setState({loggedInUser});
  // if (loggedInUser.status == "success"){
  //   jsCookie.set("username", loggedInUser.username);
  //   Router.replace("/");
  // }
}

handleValidation(){
  let username = this.state.username;
  let password = this.state.password;
  let errors = {};
  let formIsValid = true;

  //username
  if(!username){
    formIsValid = false;
    errors.username = "This is a require field";
  }

  //password
  if(!password){
    formIsValid = false;
    errors.password = "This is a require field";
  }
 
  this.setState({errors: errors});
  console.log(errors);
  return formIsValid;
  }

contactSubmit(evt){
      evt.preventDefault();

      if(this.handleValidation()){
        alert("Form submitted");
        Router.replace("/formConfirmation"); //replace with "thanks for submitting page"
      }else{
        alert("Form has errors.")
      }

}

eventHandler(evt){
  this.contactSubmit(evt);
  this.handleSearch(evt);

}


  render() {
    const that = this;
    return (
      <>
        <head>
          <title>ESAMS | Register</title>
        </head>
        <Navigation/>
        <Layout>
          <div className={styles.container}>
          <h2 className={styles.h2}>Register for an Account</h2>

          <div className={styles.whole}>
          <label htmlFor="username" className="text-style">
            Username:{" "}
          </label>
          <input
            type="text"
            id="username"
            className="input-style"
            value={this.state.username}
            onChange={this.handleUsernameUpdate.bind(this)}
          />
          <span style={{color: "red"}}>{this.state.errors.username}</span>
          </div>
          <br /> <br />

          <div className={styles.whole}>
          <label htmlFor="password" className="text-style">
            Password:{" "}
          </label>
          <input
            type="password"
            id="password"
            className="input-style"
            value={this.state.password}
            onChange={this.handlePasswordUpdate.bind(this)}
          />
          <span style={{color: "red"}}>{this.state.errors.password}</span>
          </div>
          <br /> <br /><br />
          <div className={styles.button} onClick={this.eventHandler.bind(this)}>Submit</div>
          <br /> <br />
          </div>
        </Layout>
    </>
    );
  }
}

export default Login;
