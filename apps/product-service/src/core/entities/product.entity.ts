import { errorMessages } from '../../config/common.config';

export class ProductWithoutId {
  public readonly name: string;
  constructor(name: string) {
    if (!name || !name?.trim()?.length || name?.trim()?.length < 3) {
      throw new Error(errorMessages.PRODUCT_ENTITY_NAME_ERROR);
    }
    this.name = name.trim();
  }
}

export class Product extends ProductWithoutId {
  public readonly id: number;
  constructor(id: number, name: string) {
    super(name);
    if (!id || !Number(id) || id < 1 || !Number.isInteger(id)) {
      throw new Error(errorMessages.PRODUCT_ENTITY_ID_ERROR);
    }
    this.id = id;
  }
}
