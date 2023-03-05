import getValueOfNestedProperty from "../inObject/inNestedProperty/get";

interface Objeto<T> {
  [key: string]: T | Objeto<T>;
}
/**
 * Cuenta el número de objetos en un arreglo que tienen una propiedad anidada igual a un valor dado.
 *
 * @template T - El tipo de los elementos del arreglo.
 * @param {T[]} arr - El arreglo de objetos en el que se buscará la propiedad anidada.
 * @param {string} property - La propiedad anidada que se buscará en cada objeto del arreglo.
 * @param {*} value - El valor que se buscará en la propiedad anidada.
 * @returns {number} - El número de objetos en el arreglo que tienen la propiedad anidada igual al valor dado.
 */
const count = <T>(
  arr: T[],
  property: string,
  value: any
): number => {
  let count = 0;
  for (const obj of arr) {
    const nestedObj = getValueOfNestedProperty(obj, property);
    if (nestedObj === value) {
      count++;
    }
  }
  return count;
}
export { count as default }

