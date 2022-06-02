module.exports = class Cola {
  constructor(max) {
    this.max = max;
    this.arr = new Array(max);
    this.frente = -1;
    this.final = -1;
  }

  /**
   * Si la variable final es igual a 0, devuelve verdadero, de lo contrario, devuelve falso.
   * @returns el valor de la variable final.
   */
  colaVacia() {
    if (this.final === -1) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Si el valor final es igual al valor máximo, devuelve verdadero, de lo contrario, devuelve falso.
   * @returns un valor booleano.
   */
  colaLlena() {
    if (this.final === this.max) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Si la cola está llena, imprima "Desbordamiento". De lo contrario, agregue los datos al final de la
   * cola y, si la cola está vacía, establezca el frente de la cola en el primer elemento.
   * @param dato - Los datos que se insertarán en la cola.
   */
  insertarCola(dato) {
    if (this.colaLlena()) {
      throw Error("Desbordamiento/overflow.");
    } else {
      this.arr[this.final + 1] = dato;
      this.final = this.final + 1;
      if (this.final === 0) {
        this.frente = 0;
      }
    }
  }

  /**
   * Si la cola está vacía, lanza un error. De lo contrario, establezca los datos en el valor al
   * principio de la cola. Si el frente y el reverso de la cola son iguales, configure el frente y el
   * reverso en 0. De lo contrario, incremente el frente de la cola.
   * @param dato - los datos que se eliminarán de la cola
   */
  quitarCola(dato) {
    if (this.colaVacia()) {
      throw Error("Subdesboradmiento/underflow.");
    } else {
      this.arr[this.frente] = null;

      if (this.final === this.frente) {
        this.frente = -1;
        this.final = -1;
      } else {
        this.frente = this.frente + 1;
      }
    }
  }
};
