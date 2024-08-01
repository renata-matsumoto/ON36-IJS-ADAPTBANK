import { AccountType } from "../enums/account-type.enum";
import { Account } from "./account.interface";

export class CheckingAccount implements Account {
  type = AccountType.checkingAccount;
  public overDraftLimit: number;
  constructor(
    public id: number,
    public customerId: CustomerId,
    public balance: number,
  ) {}
}
