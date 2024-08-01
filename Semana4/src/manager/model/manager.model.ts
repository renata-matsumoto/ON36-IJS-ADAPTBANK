import { Account } from 'src/accounts/models/account.interface';

export class Manager {
  constructor(
    public id: number,
    public fullName: string,
    public customerId: CustomerId,
    public accountId: Account['id'],
  ) {}
}
