import React,{PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as addDataActions from '../../actions/addDataActions';
import AddForm from "./AddForm";
import toastr from 'toastr';

class CreateAddData extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      user:Object.assign({},props.user),
      errors:{},
      saving:false
    };
    this.updateUserState=this.updateUserState.bind(this);
    this.saveUser=this.saveUser.bind(this);
  }

  updateUserState(event){
    const field=event.target.name;
    let user=this.state.user;
    user[field]=event.target.value;
    return this.setState({user:user});
  }

  saveUser(event){
    event.preventDefault();
    this.setState({saving:true});
    this.props.actions.saveUser(this.state.user)
      .then(()=>this.redirect())
      .catch(error=>{
        toastr.error(error);
        this.setState({saving:false});
      });
  }

  redirect(){
    this.setState({saving:false});
    toastr.success('User Added');
    this.context.router.push('/');
  }

  render() {
    return(
      <div>
        <AddForm
          allCompany={this.props.company}
          onChange={this.updateUserState}
          onSave={this.saveUser}
          user={this.state.user}
          errors={this.state.errors}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

CreateAddData.propTypes={
  user:PropTypes.object.isRequired,
  company:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

CreateAddData.contextTypes={
  router:PropTypes.object
};

function getUserById(Add,id) {
  const user=Add.filter(user=>user.id==id);
  if(user.length) return user[0];
  return null;
}

function mapStateToProps(state,ownProps) {
  const userId=ownProps.params.id;
  let user={id:'', firstName:'', lastName:'', address:'', company:'', telephone:'', dateOfBirth:''};

  if(userId){
    user=getUserById(state.Add,userId);
  }
  const companyFormattedForDropdown=state.company.map(company=>{
    return{
      value:company.id,
      text:company.title
    };
  });
  return{
    user:user,
    company:companyFormattedForDropdown
  };

}

function mapDispatchToProps(dispatch) {
  return{
    actions:bindActionCreators(addDataActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateAddData);
