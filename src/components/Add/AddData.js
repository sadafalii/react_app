import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as addDataActions from '../../actions/addDataActions';
import {bindActionCreators} from "redux";
import AddDataList from "./AddDataList";
import {browserHistory} from "react-router";

class AddData extends React.Component{
  constructor(props,context){
    super(props,context);
    this.redirectAddUser=this.redirectAddUser.bind(this);
  }

  userRow(userf,index){
    return <div key={index}>{userf.firstName}</div>;
  }

  redirectAddUser(){
    browserHistory.push('/user');
  }

  render() {
    const {Add}=this.props;
    return(
      <div className="contain">
        <h2>Frontend Assessment React App</h2>
        <AddDataList Add={Add}/>
        <input type="submit"
               value="Add User"
               className="btn btn-primary"
               onClick={this.redirectAddUser}/>
      </div>
    );
  }
}

AddData.propTypes={
  Add:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps) {
  return{
    Add:state.Add
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions:bindActionCreators(addDataActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddData);
