import delay from './TimeDelay';

const users = [
  {
    id: "ali-sadaf",
    firstName: "Sadaf",
    lastName: "Ali",
    address: "street 6,Rawalpindi",
    company: "ABXZ",
    telephone:"01234567891",
    dateOfBirth:"1997-06-16"
  },
  {
    id: "bilal-kiran",
    firstName: "Kiran",
    lastName: "Bilal",
    address: "street 6,Rawalpindi",
    company: "ABXZ",
    telephone:"98765432101",
    dateOfBirth:"1995-12-27"
  },
  {
    id: "roy-reena",
    firstName: "Reena",
    lastName: "Roy",
    address: "street 6,Rawalpindi",
    company: "CVBZ",
    telephone:"10293847567",
    dateOfBirth:"1990-05-23"
  },
  {
    id: "imran-lubna",
    firstName: "Lubna",
    lastName: "Imran",
    address: "street 6,Rawalpindi",
    company: "Telenor",
    telephone:"98734567567",
    dateOfBirth:"1980-05-13"
  },
  {
    id: "bey-lily",
    firstName: "Lily",
    lastName: "Bey",
    address: "street 6,Rawalpindi",
    company: "Ufone",
    telephone:"907856342198",
    dateOfBirth:"1987-11-02"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
  return replaceAll(user.firstName, ' ', '-');
};

class UserApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveCourse(user) {
    user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;

        if(user.firstName.length==0 && user.lastName.length==0 && user.address.length==0 &&
          user.company.length==0 && user.telephone.length==0 && user.dateOfBirth==0){
          reject(`Please fill the Input fields to continue`);
        }

        if (user.firstName.length < minCourseTitleLength) {
          reject(`First name must be at least ${minCourseTitleLength} characters.`);
        }
        if(user.lastName.length<minCourseTitleLength){
          reject(`Please enter the last name of at least ${minCourseTitleLength} characters`);
        }

        if (user.address.length < 0) {
          reject(`Address name must be at least three characters long.`);
        }

        if (user.address.length < 3) {
          reject(`Address name must be at least three characters long.`);
        }

        if (user.company.length < minCourseTitleLength) {
          reject(`Please select the Compnies from List`);
        }

        if (user.telephone.length < 11) {
          reject(`Please enter contact no of 11 digits`);
        }

        if (user.dateOfBirth.length < minCourseTitleLength) {
          reject(`Please select the date from given Calender`);
        }



        if (user.id) {
          const existingCourseIndex = users.findIndex(a => a.id == user.id);
          users.splice(existingCourseIndex, 1, user);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          user.id = generateId(user);
          user.watchHref = `http://www.pluralsight.com/courses/${user.id}`;
          users.push(user);
        }

        resolve(user);
      }, delay);
    });
  }

}

export default UserApi;
