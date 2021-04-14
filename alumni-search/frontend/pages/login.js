import Layout from "../components/MyLayout.js";
import Router from "next/router";
import jsCookie from "js-cookie";
import {getLogin} from '../lib/utils.js';
import Head from 'next/head'
import styles from '../styles/login.module.css'
import { Header } from '../components/Header.js'

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
    
    let loggedInUser = await getLogin({
      username: this.state.username,
      password: this.state.password
    });

    this.setState({ loggedInUser });
    if (loggedInUser.status == "success"){
      jsCookie.set("username", loggedInUser.username);
      Router.replace("/");
    }
  }

  render() {
    const that = this;
    return (
      <>
        <head>
          <title>ESAMS | Login</title>
        </head> 
        <Header/>
        <Layout>
        <div className={styles.container}>
        <section className={styles.heading}>
          <h1 className={styles.h1}>Welcome,</h1>
          <h2 className={styles.h2}>Login to continue</h2>
        </section>
        <br/><br/>
        <div className={styles.whole}>
          <input
            placeholder="username"
            type="text"
            id="username"
            className="input-style"
            value={this.state.username}
            onChange={this.handleUsernameUpdate.bind(this)}
          />
        </div>
        <div className={styles.whole}>
          <br /> <br />
          <input
            placeholder="password"
            type="password"
            id="password"
            className={styles.password_input}
            value={this.state.password}
            onChange={this.handlePasswordUpdate.bind(this)}
          />
        </div>
        <br /><br /><br />
        <div className={styles.button} onClick={this.handleSearch.bind(that)}>Submit</div>
        <br/><br/>
      </div>
      </Layout>
      </>
    );
  }
}






/*
      
      <Layout
        style={{ margin: "auto auto", width: "600px", textAlign: "center" }}
      >
        <h2>Login</h2>
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
        <br />
        <br />
        <br />
        <div className="button-style" onClick={this.handleSearch.bind(that)}>Submit</div>
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

          .error-style {
            font-size: 1.4rem;
            line-height: 1.6rem;
            font-family: "Arial";
            color: red;
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
    );
  }
}
*/
export default Login;