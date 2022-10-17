import { Getter, inject } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, HasOneRepositoryFactory, repository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Customer, Role, RoleEnum, User, UserRelations } from '../models';
import { CustomerRepository } from './customer.repository';
import { RoleRepository } from './role.repository';

export class UserRepository extends DefaultCrudRepository
  <User, typeof User.prototype.id, UserRelations> {

  public readonly customer: BelongsToAccessor<Customer, typeof Customer.prototype.id>;
  public readonly role: HasOneRepositoryFactory<Role, RoleEnum>;
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('CustomerRepository')
    customerRepositoryGetter: Getter<CustomerRepository>,
    @repository.getter('RoleRepository')
    roleRepositoryGetter: Getter<RoleRepository>,
  ) {
    super(User, dataSource);
    
    this.role = this.createHasOneRepositoryFactoryFor('role', roleRepositoryGetter);
    this.registerInclusionResolver('role', this.role.inclusionResolver);

    this.customer = this.createBelongsToAccessorFor('customer', customerRepositoryGetter);
    this.registerInclusionResolver('customer', this.customer.inclusionResolver);


  }
}
