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
} from 'sequelize-typescript';

@Table({
  tableName: 'products',
})
export class Product extends Model<Product> {
  ///
  @AllowNull(false)
  @Unique
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
