import React from "react";
import style from "./Shared.module.css";

import SearchIcon from "@mui/icons-material/Search";

function Searchb() {
  return (
    <div className={style.Searchb}>
      <p className={style.SBp}>Search for anything</p>
      <button className={style.SBbtn}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default Searchb;
