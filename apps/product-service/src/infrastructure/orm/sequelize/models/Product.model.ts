import {
  Table,
  Column,
  Model,
  AllowNull,
  PrimaryKey,
  DeletedAt,
  Unique,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'products',
})
export class ProductModel extends Model<ProductModel> {
  ///
  @AllowNull(false)
  @Unique
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column(DataType.STRING)
  name: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
