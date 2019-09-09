import React,{PropTypes} from "react";
import Header from "./HeaderLink/Header";

class AppRepiCom extends React.Component{
  render() {
    return(
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }

}
AppRepiCom.propTypes={
  children:PropTypes.object.isRequired
};
export default AppRepiCom;
