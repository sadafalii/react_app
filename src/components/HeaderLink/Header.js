import React,{PropTypes} from "react";
import {Link,IndexLink} from "react-router";

const Header=()=>{
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Back</IndexLink>
      <br/>
      <br/>
    </nav>
  );
};

export default Header;
