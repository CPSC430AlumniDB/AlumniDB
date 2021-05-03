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

function listMajors(){
  return fetch(`http://localhost:8080/listMajors`).then(function(resp){
      return resp.json();
    })
}

function listOccupations(){
  return fetch(`http://localhost:8080/listMajors`).then(function(resp){
      return resp.json();
    })
}

function listYears(){
  return fetch(`http://localhost:8080/listMajors`).then(function(resp){
      return resp.json();
    })
}

async function checkLogin(userpw){
  console.log(userpw);//{username: , password: }
  const info = await getLoginInfo(userpw);
  console.log(info);//{status: , screenname: }
  console.log(info.status);
}
/*approve an alumni
*/
function approve(user_info) {
  const header = {'Accept' : "application/json",
                  "Content-Type": "application/x-www-form-urlencoded"};
  const searchParams = new URLSearchParams(user_info);
  return fetch(`http://localhost:8080/approve`, { method: "POST",
  headers: header,
  body: searchParams}).then(function (resp){
    return resp.json();
  }); 
}

/*advanced search
use filters to browse list
*/
function advancedSearch(user_info) {
  // const header = {'Accept' : "application/json",
  //                 "Content-Type": "application/x-www-form-urlencoded"};
  // const searchParams = new URLSearchParams(user_info);
  return fetch(`http://localhost:8080/advancedSearch`).then(function (resp){
    return resp.json();
  }); 
}

function advancedMajorSearch(major) {
  return fetch(`http://localhost:8080/majorInfo?major=${major}`).then(function (resp){
    return resp.json();

  }); 
}

function advancedYearSearch(gradyear) {
  return fetch(`http://localhost:8080/yearInfo?gradyear=${gradyear}`).then(function (resp){
    return resp.json();

  }); 
}

function advancedOccupationSearch(occupation) {
  return fetch(`http://localhost:8080/occupationInfo?occupation=${occupation}`).then(function (resp){
    return resp.json();

  }); 
}

/*reject an alumni
*/
function reject(user_info) {
  const header = {'Accept' : "application/json",
                  "Content-Type": "application/x-www-form-urlencoded"};
  const searchParams = new URLSearchParams(user_info);
  return fetch(`http://localhost:8080/reject`, { method: "POST",
  headers: header,
  body: searchParams}).then(function (resp){
    return resp.json();
  }); 
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
  },
  approve: function (user_info) {
    return approve(user_info).catch(handleError);
  },
  reject: function (user_info) {
    return reject(user_info).catch(handleError);
  },
  advSearch: function (user_info) {
    return advancedSearch(user_info).catch(handleError);
  },
  listMajors: function() {
    return listMajors().catch(handleError);
  },
  listYears: function() {
    return listYears().catch(handleError);
  },
  listOccupations: function() {
    return listOccupations().catch(handleError);
  },
  getAdvancedMajors: function(major) {
    return advancedMajorSearch(major).catch(handleError);
  },
  getAdvancedYears: function(year) {
    return advancedYearSearch(year).catch(handleError);
  },
  getAdvancedOccupation: function(occupation) {
    return advancedOccupationSearch(occupation).catch(handleError);
  }
};

