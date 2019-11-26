//HeLlO WoRlD
const axios = require("axios");

const alphabetDesCasAlternatifs = sreang => {
  let divideAndConquer = 0;
  return Promise.all(
    sreang.split("").map((buchstabe, index) => {
      let caseType;
      if (buchstabe === " " && divideAndConquer === 0) {
        console.log("change letter");
        divideAndConquer = 1;
        return Promise.resolve(buchstabe);
      } else if (buchstabe === " " && divideAndConquer === 1) {
        divideAndConquer = 0;
        return Promise.resolve(buchstabe);
      }

      if (index % 2 === divideAndConquer) {
        caseType = "uppercase";
      } else {
        caseType = "lowercase";
      }

      return axios.get(
        `http://alternate-case-api.herokuapp.com/api?${caseType}=${buchstabe}`
      );
    })
  ).then(data => {
    return data.map(d => {
      console.log(d.data);
    });
  });
};

alphabetDesCasAlternatifs("hello world");
