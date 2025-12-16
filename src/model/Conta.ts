import { NegocioErro } from "../error/NegocioErro";

export class Conta {
  private _numero: string;
  private _saldo: number;

  private validarValor(valor: number): void {
    if (valor <= 0)
      throw new NegocioErro("valor não pode ser igual ou menor que zero");
  }

  public constructor(numero: string, saldo: number) {
    this._numero = numero;
    this._saldo = saldo;
  }

  public get saldo(): number {
    return this._saldo;
  }

  public sacar(valor: number): void {
    this.validarValor(valor);

    this._saldo -= valor;
  }

  public depositar(valor: number): void {
    this.validarValor(valor);

    this._saldo += valor;
  }
}
