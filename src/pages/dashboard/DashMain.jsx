import React from "react";
import { Paper, Box } from "@mui/material";
import EnhancedTable from "../../components/table/DTable";
import Card from "../../components/shared/card/Card";
import style from "./Dashmain.module.css";

function DashMain() {
  return (
      <div className={style.Main}>
        <h1>Users</h1>
        <div className={style.Cardholder}>
          <Card imgurl={"fdf"} data={"6181"} title={"5646"} />
          <Card imgurl={"fdf"} data={"6181"} title={"5646"} />
          <Card imgurl={"fdf"} data={"6181"} title={"5646"} />
        </div>
        <EnhancedTable />
      </div>
  );
}

export default DashMain;
