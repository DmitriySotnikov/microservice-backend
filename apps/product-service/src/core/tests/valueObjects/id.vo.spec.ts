import { Id } from "../../valueObjects/id.vo";


describe('Id Value Object', () => {
  it('should create Id with valid number', () => {
    const id = new Id(1);
    expect(id.value).toBe(1);
  });

  it('should throw error when creating Id with invalid input', () => {
    expect(() => new Id(null)).toThrow('Id must be a number!');
    expect(() => new Id(undefined)).toThrow('Id must be a number!');
    expect(() => new Id(0)).toThrow('Id must be a number!');
  });

  it('should correctly compare two Id objects', () => {
    const id1 = new Id(1);
    const id2 = new Id(1);
    const id3 = new Id(2);

    expect(id1.equals(id2)).toBe(true);
    expect(id1.equals(id3)).toBe(false);
  });

  it('should return correct value through getter', () => {
    const id = new Id(123);
    expect(id.value).toBe(123);
  });
});