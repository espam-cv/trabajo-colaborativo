export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
// función para multiplicar dos números
export const multiply = (a: number, b: number) => {

  return a * b;
};
