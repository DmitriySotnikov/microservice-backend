export class Failure {
  public readonly message: string;
  public readonly status: number;
  constructor(public readonly error: Error) {
    this.message = error.message;
    this.status = 400;
  }
}