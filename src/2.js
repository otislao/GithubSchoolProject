const generateRandomJSCode = () => {
  const keywords = ['let', 'var', 'const'];
  const dataTypes = ['number', 'string', 'boolean'];
  const operators = ['+', '-', '*', '/', '%', '==', '!=', '<', '>', '<=', '>=', '&&', '||'];
  const functionNames = ['square', 'cube', 'sqrt', 'pow'];
  
  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
  const randomDataType = dataTypes[Math.floor(Math.random() * dataTypes.length)];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const randomFunctionName = functionNames[Math.floor(Math.random() * functionNames.length)];
  
  return `${randomKeyword} ${randomDataType} = ${randomFunctionName}(10) ${randomOperator} ${randomFunctionName}(20)`;
};
