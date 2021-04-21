import jsCookie from "js-cookie"
import Layout from "../components/MyLayout.js";
import Style from "../styles/submitinfo.module.css";
import { Header } from '../components/Header.js';

class formConfirmation extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
		return (
    <>
      <head>
        <title>ESAMS | Email</title>
      </head>

      <Header/>
      <Layout>
      <div className={Style.container}>
        <div className={Style.confirmation}> 
        Form Sucessfully Submitted!
        </div>
        <br/>
        <br/>
        <br/>
        </div>
      </Layout>
    </>
    );
  }
}

export default formConfirmation;