export class Id {
  private readonly id: number;

  constructor(id: number) {
    if (!id || !Number(id)) {
      throw new Error('Id must be a number!');
    }
    this.id = id;
  }

  get value(): number {
    return this.id;
  }

  equals(other: Id): boolean {
    return other instanceof Id && this.id === other.id;
  }
}
