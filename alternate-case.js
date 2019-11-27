function alternateCase(str) {
    let strAsArray = str.split("");
    let result = [];
  
    let alternateWithSpace = 0;
  
    strAsArray.forEach(function(letter, index) {
      if (letter === " ") {
        alternateWithSpace === 0
          ? (alternateWithSpace = 1)
          : (alternateWithSpace = 0);
      }
  
      if (index % 2 === alternateWithSpace) {
        result.push(letter.toUpperCase());
      } else {
        result.push(letter.toLowerCase());
      }
    });
  
    return result.join("");
  }