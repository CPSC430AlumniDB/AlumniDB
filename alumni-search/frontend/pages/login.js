import Layout from "../components/MyLayout.js";
import Router from "next/router";
import jsCookie from "js-cookie";
import {getLogin} from '../lib/utils.js';
import Head from 'next/head';
import styles from '../styles/login.module.css';
import { Header } from '../components/Header.js';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", 
    password: "", 
    error: ""
  };
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
      Router.replace("/adminHome");
    } else { //error
      this.setState({error: loggedInUser.error}); //set error message
      console.log(loggedInUser.error)
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
        <br />
        {this.state.error ? 
        <div> <h1 className={styles.error}> {this.state.error}</h1></div>
        : null }
        <br /><br />
        <div className={styles.button} onClick={this.handleSearch.bind(that)}>Submit</div>
        <br/><br/>
      </div>
      </Layout>
      </>
    );
  }
}

export default Login;