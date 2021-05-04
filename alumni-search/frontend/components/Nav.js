import Link from "next/link";
import React from "react";
import jsCookie from "js-cookie";

const linkStyle = {
  color: "##1F618D",
  font: "Arial",
  textdecoration: "none",
  size: "1.2em",

  marginRight: 15,
};

const Navigation = () => {
  return (
    <div className="menu-style">
      <Link href="/">
        <a>Logout</a>
      </Link>
      &nbsp; &nbsp; &nbsp;
      <Link href="/search">
        <a>Search</a>
      </Link>
      &nbsp; &nbsp; &nbsp;
      <Link href="/pending">
        <a>Pending Forms</a>
      </Link>
      <Link href="/advancedSearch">
        <a>Advanced Search</a>
      </Link>
      <Link href="/register">
        <a>Register</a>
      </Link>
      <Link href="/emailList">
        <a>Email List</a>
      </Link>
      <Link href="/adminHome">
        <a>Home</a>
      </Link>
      
      <style jsx>{`
        .menu-style {
          float: right;
          width: 100%;
          margin-top: none;
          cursor: pointer;
          background-color: #686663;
          min-height: 40px;
          font-family: "Arial";
          line-height: 2.5;
          font-size: 1.2rem;
        }

        a {
          text-decoration: none;
          float: right;
          padding-right: 25px;
          color: white;
        }

        a:hover {
          font-weight: bold;
        }

        .App-logo {
          height: 500px;
        }
      `}</style>{" "}
    </div>
  )
}

export { Navigation };