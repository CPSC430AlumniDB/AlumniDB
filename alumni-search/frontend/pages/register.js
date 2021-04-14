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

    this.state = { username: "", password: ""};
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

  render() {
    const that = this;
    return (
      <>
        <head>
          <title>ESAMS | Register</title>
        </head>
        <div className={styles.container}>
        <Navigation/>
        <Layout
          style={{ margin: "auto auto", width: "600px", textAlign: "center" }}
        >
          <h2>Register for an Account</h2>
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
          <br /> <br />
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
          <br /> <br />
          <br />
          <br />
          <div className="button-style" onClick={this.handleSearch.bind(this)}>Submit</div>
          <br /> <br />
          <style jsx>{`
            h1,
            h2,
            h3,
            h4,
            a,
            p {
              color: #1f618d;
              font-family: "Arial";
            }

            .button-style {
              margin: auto auto;
              cursor: pointer;
              background-color: #1f618d;
              color: #ffffff;
              width: 150px;
              height: 45px;
              font-family: "Arial";
              line-height: 1.9;
              font-size: 1.4rem;
            }

            .text-style {
              font-size: 1.4rem;
              line-height: 1.6rem;
              font-family: "Arial";
              width: 50px;
              align: right;
            }

            .input-style {
              font-size: 1.4rem;
              line-height: 1.6rem;
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
          `}</style>
        </Layout>
      </div>
    </>
    );
  }
}

export default Login;
