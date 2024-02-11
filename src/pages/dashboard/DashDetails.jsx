import React from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";

function DashDetails() {
  let params = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <p onClick={() => navigate("/dashboard/main")}>Back to Users</p>
      <h2>User Datails</h2>
      <p>{params.clientId}</p>
      <Outlet />
    </div>
  );
}

export default DashDetails;
