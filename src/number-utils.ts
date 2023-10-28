export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const isEven = (a: number) => {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};