export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
<<<<<<< HEAD

export const isOdd = (a: number) => {
  if (a % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

=======
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('You can\'t divide by zero');
  }
  return a / b;
};
>>>>>>> origin
