export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const multiply = (a: number, b: number) => {
  return a * b;
}

export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('You can\'t divide by zero');
  }
  return a / b;
};
