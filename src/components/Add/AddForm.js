import React from 'react';
import TextInput from "../HeaderLink/TextInput";
import SelectInput from "../HeaderLink/SelectInput";

const AddForm=({user,allCompany,onSave,onChange,saving,errors})=>{
  return(
    <form>
      <h3>Add User Info</h3><br/>
      <TextInput
      name="firstName"
      label="First Name"
      value={user.firstName}
      onChange={onChange}
      error={errors.firstName}
      />
      <TextInput
        name="lastName"
        label="Last Name"
        value={user.lastName}
        onChange={onChange}
        error={errors.lastName}
      />
      <TextInput
        name="address"
        label="Address"
        value={user.address}
        onChange={onChange}
        error={errors.address}
      />
      <SelectInput
      name="company"
      label="Company"
      value={user.company}
      defaultOption="Select Company"
      options={allCompany}
      onChange={onChange}
      error={errors.company}
      />
      <TextInput
      name="telephone"
      label="Telephone"
      value={user.telephone}
      onChange={onChange}
      error={errors.telephone}
      />
      <label>Date of Birth</label><br/>
      <input
      type="date"
      name="dateOfBirth"
      value={user.dateOfBirth}
      onChange={onChange}
      onError={errors.dateOfBirth}
      />
      <br/>
      <br/>
      <input
      type="submit"
      disabled={saving}
      value={saving ? 'Saving...':'Save'}
      className="btn btn-primary"
      onClick={onSave}/>
    </form>
  );
};

AddForm.propTypes={
  user:React.PropTypes.object.isRequired,
  allCompany:React.PropTypes.array,
  onSave:React.PropTypes.func.isRequired,
  onChange:React.PropTypes.func.isRequired,
  saving:React.PropTypes.bool,
  errors:React.PropTypes.object
};

export default AddForm;
