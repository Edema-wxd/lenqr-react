import React from "react";
import { useParams, Outlet } from "react-router-dom";

function DashDetails() {
  let params = useParams();

  return (
    <div>
      DashDetails
      <p>{params.clientId}</p>
      <Outlet />
    </div>
  );
}

export default DashDetails;
