require("isomorphic-fetch");
import BPromise from "bluebird";

function getLoginInfo(user_info) {
  const header = {'Accept' : "application/json",
                  "Content-Type": "application/x-www-form-urlencoded"};
  const searchParams = new URLSearchParams(user_info);
  return fetch("http://localhost:8080/login",
  { method: "POST",
    headers: header,
    body: searchParams}).then(function (resp){
      return resp.json();
    }); 
}

function getNewSubmissionInfo(user_info) {
  const header = {'Accept' : "application/json",
                  "Content-Type": "application/x-www-form-urlencoded"};
  const searchParams = new URLSearchParams(user_info);
  return fetch("http://localhost:8080/submit",
  { method: "POST",
    headers: header,
    body: searchParams}).then(function (resp){
      return resp.json();
    }); 
}

function getRegisterInfo(user_info) {
  const header = {'Accept' : "application/json",
                  "Content-Type": "application/x-www-form-urlencoded"};
  const searchParams = new URLSearchParams(user_info);
  return fetch("http://localhost:8080/create",
  { method: "POST",
    headers: header,
    body: searchParams}).then(function (resp){
      return resp.json();
    }); 
}


function getSearchInInfo(searchTerm, username){
  return fetch(`http://localhost:8080/search?searchTerm=${searchTerm}&username=${username}`).then(function(resp){
      console.log(searchTerm + "searchterm");
      console.log(username + "username");
      return resp.json();
    })

}

async function checkLogin(userpw){
  console.log(userpw);//{username: , password: }
  const info = await getLoginInfo(userpw);
  console.log(info);//{status: , screenname: }
  console.log(info.status);
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  createAccount: function (user_info) {
    console.log(user_info);
    return getRegisterInfo(user_info).catch(handleError);
  },
  getLogin: function (user_info) {
    return getLoginInfo(user_info).catch(handleError);
  },
  getLoggedInfo: function(search_info, user_info){
    return getSearchInInfo(search_info, user_info).catch(handleError);
  },
  getScreenname: function (user_info) {
    return getRegisterInfo(user_info).catch(handleError);
  },
  getSubmission: function (user_info){
    return getNewSubmissionInfo(user_info).catch(handleError);
  }
};

