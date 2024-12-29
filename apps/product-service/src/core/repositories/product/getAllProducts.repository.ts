import { Product } from '../../entities/product.entity';
import { Failure } from '../../exceptions';

export abstract class GetAllProductsRepository {
  abstract execute(): Promise<Product[] | Failure>;
}
