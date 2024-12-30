import { Id } from 'src/core/valueObjects/id.vo';
import { Failure } from '../../exceptions';

export abstract class DeleteProductRepository {
  abstract execute({
    id,
  }: {
    id: number;
  }): Promise<{ productId: Id } | Failure>;
}
