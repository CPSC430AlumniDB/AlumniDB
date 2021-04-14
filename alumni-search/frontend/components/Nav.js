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
      <Link href="/search">
        <a>Search</a>
      </Link>
      &nbsp; &nbsp; &nbsp;
      <Link href="/">
        <a>Logout</a>
      </Link>
      &nbsp; &nbsp; &nbsp;
      <Link href="/pending">
        <a>Pending</a>
      </Link>
      <Link href="/advancedSearch">
        <a>Advaced Search</a>
      </Link>
      <Link href="/register">
        <a>Register</a>
      </Link>
      <Link href="/email">
        <a>Email</a>
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
          font-size: 1.4rem;
        }

        a {
          text-decoration: none;
          float: right;
          padding-right: 20px;
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