import React from "react";
import Logo from "../assets/Cloud logo.png";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import Order from "./order";
function Home() {
  return (
    <main className="home">
      {/* <Order/> */}
      <div className="container">
        <img src={Logo} alt="" />
        <h1>
          <span className="first">Weather </span>{" "}
          <span className="second">Forecast</span>
        </h1>
        <p>
          Check your weather forecast by tapping on get started, you can check
          any country, any state and any city...
        </p>
        <Link to={"/weather"}>
          <button>Get Started</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
