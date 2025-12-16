import { Conta } from "../../src/model/Conta";

describe("Conta", () => {
  test("sacar com sucesso", async () => {
    const conta: Conta = new Conta("123456", 5000.0);
    conta.sacar(200.0);
    expect(conta.saldo).toBe(4800.0);
  });

  test("depositar com sucesso", async () => {
    const conta: Conta = new Conta("123456", 5000.0);
    conta.depositar(200.0);
    expect(conta.saldo).toBe(5200.0);
  });

  test("sacar com valor zerado", async () => {
    const conta: Conta = new Conta("123456", 5000.0);
    expect(() => {
      conta.sacar(0);
    }).toThrow("valor não pode ser igual ou menor que zero");
  });

  test("depositar com valor zerado", async () => {
    const conta: Conta = new Conta("123456", 5000.0);
    expect(() => {
      conta.depositar(0);
    }).toThrow("valor não pode ser igual ou menor que zero");
  });
});
