const helpFrancisco = require("./helpFrancisco");

describe("helpFracisco", () => {
  test("La cantidad de medias debe ser igual al numero de colores", () => {
    const expectativa =
      "Error deben coincidir la cantidad de medias con la cantidad de colores";
    const resultado = helpFrancisco(6, [1, 2, 8]);
    expect(expectativa).toBe(resultado);
  });

  test("Debería imprimir 2 si recibe (6, [1, 2, 5, 8, 2, 1])", () => {
    const expectativa = 2;
    const resultado = helpFrancisco(6, [1, 2, 5, 8, 2, 1]);
    expect(expectativa).toBe(resultado);
  });

  test("Debe lanzar un error si coloca algo diferente a un numero", () => {
    const expectativa = "Se esta ingresando un valor diferente a un numero";
    const resultado =
      helpFrancisco("6", [1, 2, 5, 8, 2, 1]) ||
      expect(expectativa).toBe(resultado);
  });

  test("Debe lanzar un error si Los colores de calcetines no es un array de numeros", () => {
    const expectativa = "Los colores de calcetines no es un array de numeros";
    const resultado =
      helpFrancisco(6, ["fdf", 2, 5, 8, 2, 1]) ||
      expect(expectativa).toBe(resultado);
  });
});
