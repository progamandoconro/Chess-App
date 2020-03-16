import React, { useContext } from "react";
import { myContext } from "./myContext";

function Dashboard() {
  const value = useContext(myContext);
  return (
    <div>
      <h2>Dashboard</h2>
      <h1>{value}</h1>
    </div>
  );
}

export default Dashboard;
