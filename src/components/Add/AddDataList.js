import React,{PropTypes} from "react";
import AddDataListRow from './AddDataListRow';

const AddDataList=({Add})=>{
  return(
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Company</th>
        <th>Telephone</th>
        <th>Date of Birth</th>
      </tr>
      </thead>
      <tbody>
      {Add.map(Add=>
      <AddDataListRow key={Add.id} user={Add}/>
      )}
      </tbody>
    </table>
  );
};
AddDataList.propTypes={
  Add:PropTypes.array.isRequired
};

export default AddDataList;
