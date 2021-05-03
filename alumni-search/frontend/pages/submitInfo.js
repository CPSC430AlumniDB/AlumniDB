import Layout from "../components/MyLayout.js";
import Router from "next/router";
import jsCookie from "js-cookie";
import {getSubmission} from '../lib/utils.js';
import { Header } from '../components/Header.js'
import style from '../styles/submitinfo.module.css'
import e from "cors";

//this page needs to be styled but is otherwise done
class SubmitInfo extends React.Component {
  constructor(props) {
    super(props);
    
    
    this.state = { 
      firstname: "", 
      middlename: "", 
      lastname: "", 
      occupation: "", 
      email: "", 
      emailUpdates: false,
      personalUpdates: "", 
      gradYear: '',
      major: "", 
      errors: {
        email: "",
        firstname: "",
        lastname: "",
        gradYear: ''
      }
      }
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
    console.log("button value:" + evt.target.checked)
    this.setState({emailUpdates: (evt.target.checked) ? 'y': 'n'});
    console.log("email answer state" + this.state.emailUpdates)
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

    async handleSearch(evt){
    
        const results = await getSubmission({
            firstname: this.state.firstname, 
            middlename: this.state.middlename, 
            lastname: this.state.lastname,
            gradyear: this.state.gradYear, 
            major: this.state.major, 
            occupation: this.state.occupation, 
            email: this.state.email, 
            emailupdates: this.state.emailUpdates,
            personalupdates: this.state.personalUpdates, 
            
        });
       
        if(results){
            this.setState({ results: results });
          } else {
            this.setState({ 
              results: []    
            });
          } 
          console.log(results);//this message gets triggered no matter if the input is valid or not
          
    }

    handleValidation(){
      let email = this.state.email;
      let firstname = this.state.firstname;
      let lastname = this.state.lastname;
      let gradYear = this.state.gradYear;
      let errors = {};
      let formIsValid = true;

      //gradYear
      if(!gradYear){
        formIsValid = false;
        errors.gradYear = "This is a require field";
      }

      //Lastname
      if(!lastname){
        formIsValid = false;
        errors.lastname = "This is a require field";
      }

     if(lastname !== ""){
        if(!lastname.match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors.lastname = "Only letters are allowed for a last name";
        }        
      }


      //Firstname
      if(!firstname){
        formIsValid = false;
        errors.firstname = "This is a require field";
      }

     if(firstname !== ""){
        if(!firstname.match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors.firstname = "Only letters are allowed for a first name";
        }        
      }
     
 
      //Email
      if(!email){
         formIsValid = false;
         errors.email = "This is a required field";
      }

      if(email !== ""){
         let lastAtPos = email.lastIndexOf('@');
         let lastDotPos = email.lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
            formIsValid = false;
            errors.email = "Email is not valid";
          }
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
              <title>ESAMS | Submit Information</title>
            </head>
            <Header/>
            <Layout>
            <div className="panel panel-default">
            </div>
            <div className={style.container}>
              <h2 className={style.heading}>Submit Your Information</h2>
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
                <span style={{color: "red"}}>{this.state.errors.firstname}</span>
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
                  <span style={{color: "red"}}>{this.state.errors.lastname}</span>

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
                <span style={{color: "red"}}>{this.state.errors.email}</span>
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
                <span style={{color: "red"}}>{this.state.errors.gradYear}</span>

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
                  value={this.state.emailUpdates}
                  onChange={this.handleEmailUpdatesUpdate.bind(this)}
                />
              </div>
              <br /><br /><br />
              <div className={style.button} onClick={this.eventHandler.bind(that)}>Submit</div>
              <br /> <br />
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
            <h2>Submit Your Information</h2>
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
            <br /> <br />
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
            <br /> <br />
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
            <br /> <br />
            <label htmlFor="emailUpdates" className="text-style">
              Email Updates (Enter Y or N):{" "}
            </label>
            <input
              type="text"
              id="emailUpdates"
              className="input-style"
              value={this.state.emailUpdates}
              onChange={this.handleEmailUpdatesUpdate.bind(this)}
    
            />
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
            <br /> <br />
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
export default SubmitInfo;

