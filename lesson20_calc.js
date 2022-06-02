function getDelimiterIndex(str, delimiter) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == delimiter || str[i] == "\n") {
        return i;
      }
    }
    return str.length;
  }
  
  function sum(arguments) {
    if (arguments.length == 0) return 0;
  
    let delimiter = ',';
    if (arguments[0] == "/" && arguments[2] == "\n") {
      delimiter = arguments[1];
      arguments = arguments.substr(3);
    }
  
    let sum = 0;
    do {
      let index = getDelimiterIndex(arguments, delimiter);
      let number = Number(arguments.substr(0, index));
      sum += number;
      arguments = arguments.substr(index + 1)
    } while (arguments.length > 0)
  
    return sum;
  }