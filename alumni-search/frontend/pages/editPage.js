import jsCookie from "js-cookie"
import Layout from "../components/MyLayout.js";
import style from "../styles/submitinfo.module.css";
import { Header } from '../components/Header.js';
import Router from "next/router";
import {edit,feature,deleteAlum} from '../lib/utils.js';
import axios from 'axios'; //for mounting component with query info


class editPage extends React.Component {
  constructor(props) {
    super(props);
    this.deleteConfirmed = false; //set to true if user confirms they want to delete
    this.state = { id : 0, firstname: "", middlename: "", lastname: "", occupation: "", email: "", emailUpdates: "y",
                personalUpdates: "", gradYear: 0, major: ""};
    }

    componentDidMount() {
      axios.get(`http://localhost:8080/showSaved`)
        .then(res => {
          const saved = res.data;
          //set state to saved alumni
          console.log(saved)
          this.setState({id: saved[0].id, firstname: saved[0].firstname, middlename: saved[0].middlename, lastname: saved[0].lastname, 
            occupation: saved[0].occupation, email: saved[0].email, emailUpdates: saved[0].emailupdates, personalUpdates: saved[0].personalupdates, 
            gradYear: saved[0].gradyear, major: saved[0].major});

        })

    }
    
    async handleFirstNameUpdate(evt){
      this.setState({firstname: evt.target.value});
      }
      async handleMiddleNameUpdate(evt){
      this.setState({middlename: evt.target.value});
      }
      async handleLastNameUpdate(evt){
      this.setState({lastname: evt.target.value});
      }
      async handleOccupationUpdate(evt){
      this.setState({occupation: evt.target.value});
      }
      async handleEmailUpdate(evt){
      this.setState({email: evt.target.value});
      }
      async handleEmailUpdatesUpdate(evt){
      //convert "on" and "off" to "y" and "n"
      this.setState({emailUpdates: (evt.target.checked) ? 'y': 'n'});
      }
      async handlePersonalUpdatesUpdate(evt){
      this.setState({personalUpdates: evt.target.value});
      }
      async handleGradYearUpdate(evt){
      this.setState({gradYear: evt.target.value});
      }
      async handleMajorUpdate(evt){
      this.setState({major: evt.target.value});
      }

      async handleEdit(evt){

        let info = {id: this.state.id,
        firstname: this.state.firstname, 
        middlename: this.state.middlename, 
        lastname: this.state.lastname,
        gradYear: this.state.gradYear, 
        major: this.state.major, 
        occupation: this.state.occupation, 
        email: this.state.email, 
        emailUpdates: this.state.emailUpdates,
        personalUpdates: this.state.personalUpdates}

        console.log(this.state)
    
        const results = await edit(info);
    
        if(results){
            this.setState({ results: results });
          } else {
            this.setState({ 
              results: []    
            });
          } 
          console.log(results);
          alert("Alumnus Information Saved")
    }

    async handleFeature(evt) {
        const results = await feature({id : this.state.id});
        alert("Alumnus Featured")
        console.log(results);
    }

    async handleDelete(evt) {
      let results;
      if (confirm('Are you sure you want to delete this alumnus?')) {
        results = await deleteAlum({id : this.state.id});
        console.log(results);
        Router.replace("/advancedSearch"); //go back to search
      }
    }

    async handleBack(evt) {
      Router.replace("/advancedSearch"); //go back to search
    }

  render() {
    let that = this;
		return (
    <>
      <head>
        <title>ESAMS | Email</title>
      </head>

      <Layout>
      <div className={style.container}>
      <h2 className={style.heading}>Edit Information</h2>
      <br/>
      <div className={style.whole}>
                <label htmlFor="firstname" className="text-style">
                  First Name:{" "}
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="input-style"
                  value={this.state.firstname}
                  onChange={this.handleFirstNameUpdate.bind(this)}
                />
              </div>

              <br />
              <div className={style.whole}>
                <label htmlFor="middlename" className="text-style">
                  Middle Name:{" "}
                </label>
                <input
                  type="text"
                  id="middlename"
                  className="input-style"
                  value={this.state.middlename}
                  onChange={this.handleMiddleNameUpdate.bind(this)}
                />
              </div>

              <br/>
              <div className={style.whole}>
                <label htmlFor="lastname" className="text-style">
                  Last Name:{" "}
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="input-style"
                  value={this.state.lastname}
                  onChange={this.handleLastNameUpdate.bind(this)}
                />
              </div>

              <br />
              <div className={style.whole}>
                <label htmlFor="occupation" className="text-style">
                  Occupation:{" "}
                </label>
                <input
                  type="text"
                  id="occupation"
                  className="input-style"
                  value={this.state.occupation}
                  onChange={this.handleOccupationUpdate.bind(this)}
                />
              </div>

              <br/>
              <div className={style.whole}>
                <label htmlFor="email" className="text-style">
                  Email:{" "}
                </label>
                <input
                  type="text"
                  id="email"
                  className="input-style"
                  value={this.state.email}
                  onChange={this.handleEmailUpdate.bind(this)}      
                />
              </div>

              <br/>
              <div className={style.whole}>
                <label htmlFor="personalUpdates" className="text-style">
                  Personal Updates:{" "}
                </label>
                <input
                  type="text"
                  id="personalUpdates"
                  className="input-style"
                  value={this.state.personalUpdates}
                  onChange={this.handlePersonalUpdatesUpdate.bind(this)}
                />
              </div>

              <br /> 
              <div className={style.whole}>
                <label htmlFor="gradYear" className="text-style">
                  Graduation Year:{" "}
                </label>
                <input
                  type="number"
                  id="gradYear"
                  className="input-style"
                  value={this.state.gradYear}
                  onChange={this.handleGradYearUpdate.bind(this)}
                />
              </div>

              <br/>
              <div className={style.whole}>
                <label htmlFor="major" className="text-style">
                  Major:{" "}
                </label>
                <input
                  type="text"
                  id="major"
                  className="input-style"
                  value={this.state.major}
                  onChange={this.handleMajorUpdate.bind(this)}
                />
              </div>

              <br /> 
              <div className={style.whole}>
                <label htmlFor="emailUpdates" className="text-style">
                  Email Updates:{" "}
                </label>
                <input
                  type="checkbox"
                  id="emailUpdates"
                  className="input-style"
                  checked = {this.state.emailUpdates==='y' ? 'true': 'false'}
                  onChange={this.handleEmailUpdatesUpdate.bind(this)}
                />
              </div>
              <br/>
              <div className={style.button} onClick={this.handleEdit.bind(that)} >Save</div>
              <br/>
              <div className={style.button} onClick={this.handleFeature.bind(that)}  >Feature</div>
              <br/>
              <div className={style.button} onClick={this.handleDelete.bind(that)} >Delete</div>
              <br/>
              <div className={style.button } onClick={this.handleBack.bind(that)} >Back</div>
              <br/><br/>
      </div>
      </Layout>
    </>
    );
  }
}

export default editPage;