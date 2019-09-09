import * as types from './actionTypes';
import userApi from '../mockApi/mockuserApi';
export function loadUsersSuccess(Add) {
  return{type:types.LOAD_USERS_SUCCESS,Add};
}

export function createUserSuccess(user) {
  return{type:types.CREATE_USER_SUCCESS,user};
}

export function updateUserSuccess(user) {
  return{type:types.UPDATE_USER_SUCCESS,user};
}

export function loadUsers() {
  return function (dispatch) {
    return userApi.getAllCourses().then(Add=>{
      dispatch(loadUsersSuccess(Add));
    }).catch(error=>{
      throw (error);
      });
  };
}

export function saveUser(user) {
  return function (dispatch,getState) {
    return userApi.saveCourse(user).then(saveUser=>{
      user.id?dispatch(updateUserSuccess(saveUser)):
        dispatch(createUserSuccess(saveUser));
    }).catch(error=>{
      throw(error);
    });
  };
}
