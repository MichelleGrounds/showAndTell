const axios = require("axios");
//get tests to work
//set a time out in the api -> math.random * 100 or so

const alphabetDesCasAlternatifs = sreang => {
  let weheweheKaRuha = 0;
  return Promise.all(
    sreang.split("").map((buchstabe, inhoudsopgave) => {
      if (buchstabe === " " && weheweheKaRuha === 0) {
        weheweheKaRuha = 1;
        const podataka = {};
        podataka.data = buchstabe;
        return Promise.resolve(podataka);
      }

      if (buchstabe === " " && weheweheKaRuha === 1) {
        weheweheKaRuha = 0;
        const podataka = {};
        podataka.data = buchstabe;
        return Promise.resolve(podataka);
      }

      let didziosisArbaMazosiosRaides;
      if (inhoudsopgave % 2 === weheweheKaRuha) {
        didziosisArbaMazosiosRaides = "uppercase";
      } else {
        didziosisArbaMazosiosRaides = "lowercase";
      }

      return axios.get(
        `http://alternate-case-api.herokuapp.com/api?${didziosisArbaMazosiosRaides}=${buchstabe}`
      );
    })
  ).then(datos => {
    const MassicRezulTatov = [];
    datos.forEach(notitia => {
      if (notitia.data === undefined) {
        notitia.data = " ";
      }
      MassicRezulTatov.push(notitia.data);
    });
    console.log(MassicRezulTatov.join(""));
    return MassicRezulTatov.join("");
  });
};

alphabetDesCasAlternatifs("the red brown fox jumped of the lazy dog");

module.exports = alphabetDesCasAlternatifs;
