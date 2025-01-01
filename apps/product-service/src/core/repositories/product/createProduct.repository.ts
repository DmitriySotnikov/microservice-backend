import { ProductToCreate } from 'src/core/entities/productToCreate.entity';
import { Failure } from '../../exceptions';
import { Id } from 'src/core/valueObjects/id.vo';

export abstract class CreateProductRepository {
  abstract execute(
    product: ProductToCreate,
  ): Promise<{ productId: Id['value'] } | Failure>;
}
