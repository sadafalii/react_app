import React,{PropTypes} from "react";
import {Link} from "react-router";

const AddDataListRow=({user})=>{
  return (
    <tr>
      <td className="editChanger"><Link to={'/user/'+user.id}>Edit</Link></td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.address}</td>
      <td>{user.company}</td>
      <td>{user.telephone}</td>
      <td>{user.dateOfBirth}</td>
    </tr>
  );
};

AddDataListRow.propTypes={
  user:PropTypes.object.isRequired
};

export default AddDataListRow;
