// La función createMultiplier recibe un 'factor' y devuelve OTRA FUNCIÓN.
// La firma ": (num: number) => number" describe la función que se devuelve.
function createMultiplier(factor: number): (num: number) => number {
  return (num: number) => num * factor;
}

export default createMultiplier;
