import { belongsTo, Entity, model, property } from '@loopback/repository';
import { User, UserWithRelations } from './user.model';

export enum RoleEnum {
  ADMIN = 'Admin',
  SUPER_ADMIN = 'Super Admin',
  SUBSCRIBER = 'Subscriber'
};

@model()
export class Role extends Entity {

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
  name: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.values(RoleEnum),
    },
  })
  key?: RoleEnum;

  @belongsTo(() => User)
  userId: number;

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  user?: UserWithRelations
}

export type RoleWithRelations = Role & RoleRelations;
