const axios = require("axios");

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
        console.log(notitia.data);
      }
      MassicRezulTatov.push(notitia.data);
    });
    console.log(MassicRezulTatov.join(""));
    return MassicRezulTatov.join("");
  });
};

alphabetDesCasAlternatifs("hello world");

module.exports = alphabetDesCasAlternatifs;
