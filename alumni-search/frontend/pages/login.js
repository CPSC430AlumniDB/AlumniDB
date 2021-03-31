import Layout from "../components/MyLayout.js";
import Router from "next/router";
import jsCookie from "js-cookie";
import {getLogin} from '../lib/utils.js';
import Head from 'next/head'
import styles from '../styles/login.module.css'

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
    
    const loggedInUser = await getLogin({
      username: this.state.username,
      password: this.state.password
    });

    this.setState({ loggedInUser });
    if (loggedInUser.status == "success"){
      jsCookie.set("screenname", loggedInUser.screenname);
      Router.replace("/");
    }
  }

  render() {
    const that = this;
    jsCookie.remove("screenname");
    return (
      <>
        <head>
          <title>ESAMS | Login</title>
        </head> 
        <Layout>
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
      </Layout>
      </>
    );
  }
}

export default Login;
