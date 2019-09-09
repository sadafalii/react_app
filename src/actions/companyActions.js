import CompanyApi from "../mockApi/mockCompanyApi";
import * as types from './actionTypes';

export function loadCompanySuccess(company) {
  return{type:types.LOAD_COMPANY_SUCCESS,company};
}

export function loadCompany() {
  return function (dispatch){
    return CompanyApi.getAllCompany().then(company=> {
      dispatch(loadCompanySuccess(company));
    }).catch(error=>{
      throw(error);
    });
  };
}
