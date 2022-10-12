import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./maindash.css";
const Maindash = () => {
  return (
    <div className="maindash">
      <h1>Dasboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default Maindash;
