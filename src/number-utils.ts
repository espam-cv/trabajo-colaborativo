export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const esImpar = (a: number) => {
  if (a % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

