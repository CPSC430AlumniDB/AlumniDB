import Layout from "../components/MyLayout.js";
import Style from "../styles/submitinfo.module.css";
import { Header } from '../components/Header.js';

class accountConfirmation extends React.Component {
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
        Account created
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

export default accountConfirmation;