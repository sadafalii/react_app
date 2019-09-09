import delay from './TimeDelay';

const company = [
  {
    id: 'wanclouds',
    title:'WanClouds'
  },
  {
    id: 'telenor',
    title:'Telenor'
  },
  {
    id: 'ufone',
    title: 'Ufone'
  },
  {
    id:'zong',
    title:'Zong'
  },
  {
    id:'splitech',
    title:'SplitTech'
  }
];

const generateId = (company) => {
  return company.title.toLowerCase() ;
};

class CompanyApi {
  static getAllCompany() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], company));
      }, delay);
    });
  }

  static saveCompany(company) {
    company = Object.assign({}, company);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minAuthorNameLength = 3;
        if (company.title.length < minAuthorNameLength) {
          reject(`First Name must be at least ${minAuthorNameLength} characters.`);
        }


        if (company.id) {
          const existingAuthorIndex = company.findIndex(a => a.id == company.id);
          company.splice(existingAuthorIndex, 1, company);
        } else {
          company.id = generateId(company);
          company.push(company);
        }

        resolve(company);
      }, delay);
    });
  }

}

export default CompanyApi;
