import { Failure } from '../../exceptions';

export abstract class DeleteProductRepository {
  abstract execute({
    id,
  }: {
    id: number;
  }): Promise<{ message: string } | Failure>;
}
