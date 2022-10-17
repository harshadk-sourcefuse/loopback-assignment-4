import { belongsTo, Entity, hasOne, model, property } from '@loopback/repository';
import { Customer, CustomerWithRelations } from './customer.model';
import { Role, RoleEnum, RoleWithRelations } from './role.model';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
  })
  middleName?: string;

  @property({
    type: 'string',
  })
  lastName?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  phoneNumber?: string;

  @property({
    type: 'date',
    default: new Date(),
  })
  createdOn?: string;

  @property({
    type: 'date',
  })
  modifiedOn?: string;

  @belongsTo(() => Customer, { keyTo: 'customerId' })
  customerId: number;

  @hasOne(() => Role, { keyTo: 'key' })
  role: Role;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  customer?: CustomerWithRelations;
  role?: RoleWithRelations;
}

export type UserWithRelations = User & UserRelations;
